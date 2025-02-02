import { Button } from "@/components/ui/button"
import Link from "next/link";

export default async function Sidebar() {
    const childAccounts = [
        {id: 1, name: "LaMelo"},
        {id: 2, name: "LiAngelo"},
        {id: 3, name: "Lonzo"},
    ];

    // Common button styling for all buttons
    const buttonClasses = "rounded-xl border-2 border-sky-400 bg-white px-6 py-4 text-lg font-semibold text-sky-600 shadow-md drop-shadow-sm hover:border-sky-500 hover:bg-sky-50 hover:text-sky-700 hover:shadow-lg hover:drop-shadow-md transform transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    return (
        <div className="h-screen w-[250px] bg-gray-100 border-r border-gray-300 overflow-y-auto p-5">
            <h1 className="mb-4 text-xl font-bold">Actions</h1>

            <Link href="/parent/assign-quests/">
                <Button
                    variant="outline"
                    className={`${buttonClasses} mb-10`}
                >

                ✏️ Assign Quests
                </Button>
            </Link>

            <Link href="/parent/assign-rewards/">
                <Button
                    variant="outline"
                    className={`${buttonClasses} mb-10 px-5`} // Adjusted padding for this specific button
                >

                🏆 Assign Rewards
                </Button>
            </Link>

            <h1 className="mb-4 text-xl font-bold">Child Accounts</h1>

            {childAccounts.map((item) => (
            <Link key={item.id} href={`/parent/child/${item.id}`} passHref>
                <Button variant="outline" className={`${buttonClasses} mb-8 w-full`}>
                    {item.name}
                </Button>
            </Link>
        ))}

        </div>
    );
}