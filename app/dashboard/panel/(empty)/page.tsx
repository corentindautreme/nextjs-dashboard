import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Events'
};

export default async function Page() {
    return (
        <div className="hidden md:block">
            Default panel view
        </div>
    );
}