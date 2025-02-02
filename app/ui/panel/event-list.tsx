import Link from 'next/link';
import {Event} from '@/app/lib/definitions';
import {clsx} from 'clsx';

export default async function EventList({events, currentEvent}: { events: Event[], currentEvent: number | undefined }) {
    return (
        <div className="flex max-h-full overflow-y-auto flex-col">
            <div className="flex justify-between flex-col space-y-2">
                {events?.map((event) => (
                        <div
                            id={`${event.id}`}
                            key={event.id}
                            className={clsx('w-full rounded-md bg-gray-200 dark:bg-slate-900',
                                {
                                    'border-l-4 border-indigo-500': currentEvent == event.id
                                }
                            )}
                        >
                            <Link href={`/dashboard/panel/edit/${event.id}#${event.id}`}>
                                <div className="flex items-center justify-between p-4">
                                    <div>
                                        <p className={clsx('md text-gray-900 dark:text-gray-100',
                                            {
                                                'font-bold': currentEvent == event.id
                                            }
                                        )}
                                        >{event.name}</p>
                                        <p className={clsx('text-sm text-gray-500',
                                        {
                                            'font-bold': currentEvent == event.id
                                        }
                                        )}
                                        >{event.stage}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
