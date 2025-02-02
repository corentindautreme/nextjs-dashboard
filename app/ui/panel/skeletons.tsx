// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] ' +
    'before:bg-gradient-to-r before:from-transparent before:via-white/60 dark:before:via-slate-700/60 before:to-transparent';

export function EventSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden w-full rounded-md bg-gray-200 dark:bg-slate-900`}
        >
            <div className="p-4">
                <div>
                    <div className="h-6 mb-1 w-24 rounded-md bg-gray-300 dark:bg-slate-800 text-sm font-medium"/>
                    <div className="h-6 w-16 rounded-md bg-gray-300 dark:bg-slate-800 text-sm font-medium"/>
                </div>
            </div>
        </div>
    )
}

export function EventListSkeleton() {
    return (
        <div className="flex justify-between flex-col space-y-2">
            <EventSkeleton/>
            <EventSkeleton/>
        </div>
    );
}