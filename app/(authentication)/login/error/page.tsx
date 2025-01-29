'use client';

import AcmeLogo from '@/app/ui/acme-logo';
import {Suspense} from 'react';
import {useSearchParams} from 'next/navigation';
import {lusitana} from '@/app/ui/fonts';
import Link from 'next/link';

function Error() {
    const search = useSearchParams()
    const error = search.get('error')
    return (
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
            <h5 className={`${lusitana.className} mb-3 text-2xl`}>
                An error occurred while trying to authenticate
            </h5>
            <div className="font-normal">
                Error message: {error}
            </div>
            <div className="mt-5">
                <Link
                    href="/login"
                    className="rounded-lg bg-blue-600 p-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                    Return to the login page
                </Link>
            </div>
        </div>
    );
}

export default function LoginPage() {

    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <AcmeLogo/>
                    </div>
                </div>
                <Suspense>
                    <Error/>
                </Suspense>
            </div>
        </main>
    );
}