'use server';

import {signIn} from '@/auth';
import {AuthError} from 'next-auth';

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function authenticateWithGithub(
    prevState: string | undefined,
    formData: FormData
) {
    try {
        await signIn('github', formData)
    } catch (error) {
        if (error instanceof AuthError) {
            return 'Something went wrong.';
        }
        // it looks like the redirection that takes place when you're not logged in is done via a thrown error: you need
        // to leave this throw here
        throw error;
    }
}