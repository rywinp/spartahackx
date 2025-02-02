import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (
        <div className="">
            <Header />
            <main className="">
                <div className="flex min-h-screen">
                    <Sidebar/>
                        <div className="flex-1 w-full">
                            {children}
                        </div>
                </div>
            </main>
        </div>
    );
}