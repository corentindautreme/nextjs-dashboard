'use client';

import {useSelectedLayoutSegment} from 'next/navigation';
import {clsx} from 'clsx';

export default function Layout({children, events}: { children: React.ReactNode, events: React.ReactNode }) {
    const layoutSegment = useSelectedLayoutSegment();

    return (
        <main className="h-full md:flex md:flex-row">
            <div className="w-full px-3 flex-none md:w-64 md:px-0">
                {events}
            </div>
            <div className={clsx(
                "w-full p-3 flex-col md:flex md:flex-grow md:p-8",
                {
                    "flex": layoutSegment === 'edit',
                    "hidden": layoutSegment == null
                }
            )}>
                {children}
            </div>
        </main>
    );
}