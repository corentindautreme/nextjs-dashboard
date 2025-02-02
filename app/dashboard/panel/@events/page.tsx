import EventList from '@/app/ui/panel/event-list';
import {fetchCachedEvents} from '@/app/lib/data';

export default async function Page() {
    const events = await fetchCachedEvents();
    return (
        <EventList events={events}/>
    );
}