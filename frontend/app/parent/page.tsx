import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
    const user = await currentUser();

    return (
        <div className="">
            <Header />
            <main className="relative">
                <div>
                    <Sidebar/>
                </div>
            </main>
        </div>
    );
}