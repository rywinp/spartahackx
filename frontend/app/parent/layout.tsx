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
            <main className="relative">
                <div className="flex">
                    <Sidebar/>
                    <main>
                        {children}
                    </main>
                </div>
            </main>
        </div>
    );
}