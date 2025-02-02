'use client';

import {useSelectedLayoutSegment} from 'next/navigation';
import {clsx} from 'clsx';
import {EventListSkeleton} from '@/app/ui/panel/skeletons';
import {Suspense} from 'react';

export default function Layout({children}: { children: React.ReactNode }) {
    const layoutSegment = useSelectedLayoutSegment();
    console.log("@events: " + layoutSegment);

    return (
        <div className={clsx("h-full md:block", {"hidden": layoutSegment === 'edit'})}>
            <Suspense fallback={<EventListSkeleton/>}>
                {children}
            </Suspense>
        </div>
    );
}