import NextAuth from 'next-auth';
import {authConfig} from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import {z} from 'zod';
import {sql} from '@vercel/postgres';
import type {User} from '@/app/lib/definitions';
import GitHub from 'next-auth/providers/github';
import bcrypt from 'bcrypt';

async function getUserByEmail(email: string): Promise<User | undefined> {
    try {
        const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut, handlers } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(6) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUserByEmail(email);
                    if (!user) return null;
                    const passwordsMatch = await bcrypt.compare(password, user.password);

                    if (passwordsMatch) return user;
                }

                console.log('Invalid credentials');
                return null;
            }
        }),
        GitHub({
            profile(profile) {
                return {
                    id: profile.id.toString(),
                    // I like using the login better than the display name
                    name: profile.login,
                    email: profile.email,
                    image: profile.avatar_url
                }
            }
        })
    ]
});