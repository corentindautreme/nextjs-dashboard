import {Metadata} from 'next';
import Link from 'next/link';
import {ArrowLeftIcon} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
    title: 'Events'
};

export default async function Page(props: { params: Promise<{ id: number }> }) {
    const params = await props.params;
    const id = params.id;

    return (
        <div>
            <Link
                href="/dashboard/panel"
                className="flex flex-row items-center"
            >
                <ArrowLeftIcon className="w-6"/>
                <p className="hidden md:block md:ml-1">Back</p>
            </Link>
            <p>Event {id}</p>
        </div>
    );
}