import EventList from '@/app/ui/panel/event-list';
import {fetchCachedEvents} from '@/app/lib/data';

export default async function Page(props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const id = params.id;
    console.log(id);
    const events = await fetchCachedEvents();
    return (<EventList events={events} currentEvent={id}/>);
}