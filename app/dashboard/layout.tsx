import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden dark:bg-slate-950">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow md:overflow-y-auto dark:bg-slate-950 md:p-12">{children}</div>
            {/*<div className="flex-grow flex flex-col md:overflow-y-auto dark:bg-slate-950">*/}
            {/*    <div className="flex p-4 items-center">*/}
            {/*        <h1>Test</h1>*/}
            {/*    </div>*/}
            {/*    {children}*/}
            {/*</div>*/}
        </div>
    );
}