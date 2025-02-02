'use client';

import {useSelectedLayoutSegment} from 'next/navigation';
import {clsx} from 'clsx';
import {lusitana} from '@/app/ui/fonts';

export default function Layout({children, events}: { children: React.ReactNode, events: React.ReactNode }) {
    const layoutSegment = useSelectedLayoutSegment();

    return (
        <main className="h-full md:flex md:flex-col">
            <div className="flex w-full px-3 md:px-0">
                <h1 className={`${lusitana.className} text-2xl`}>Events</h1>
            </div>
            <div className="h-full mt-4 md:flex md:flex-row md:mt-8 md:overflow-y-auto">
                <div className="w-full px-3 flex-none md:w-64 md:px-0">
                    {events}
                </div>
                <div className={clsx(
                    'w-full p-3 flex-col md:flex md:flex-grow md:p-8 md:overflow-y-auto',
                    {
                        'flex': layoutSegment === 'edit',
                        'hidden': layoutSegment == null
                    }
                )}>
                    {children}
                </div>
            </div>
        </main>
    );
}