import type { NextAuthConfig } from 'next-auth';
import type {User} from '@/app/lib/definitions';
import {sql} from '@vercel/postgres';

async function getUserByName(name: string): Promise<User | undefined> {
    try {
        const user = await sql<User>`SELECT * FROM users WHERE name=${name}`;
        return user.rows[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const authConfig = {
    pages: {
        signIn: '/login',
        error: '/login/error'
    },
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            try {
                if (user.name) {
                    const dbUser = await getUserByName(user.name);
                    return dbUser && true;
                }
                return false;
            } catch (e) {
                console.dir(e);
                return false;
            }
        },
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                console.log("Unauthenticated user, redirecting to login page")
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                console.log("Redirecting to URL /dashboard")
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        },
    },
    providers: [], // Add providers with an empty array for now // I assume this array is overridden in auth.ts
} satisfies NextAuthConfig;