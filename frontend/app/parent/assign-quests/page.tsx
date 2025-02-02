import AssignQuests from "@/components/assign-quests";
import Header from "@/components/header";

export default async function Quests() {
    const quests = [
        {
            id: 1,
            title: "Math Homework",
            titleDescription: "Complete Algebra Chapter 5 Exercises",
            name: "LaMelo Ball",
            points: 100
        },
        {
            id: 2,
            title: "Kitchen Duty",
            titleDescription: "Wash and dry all dishes",
            name: "LiAngelo Ball",
            points: 50
        },
        {
            id: 3,
            title: "Garbage Duty",
            titleDescription: "Take out recycling and trash",
            name: "Lonzo Ball",
            points: 25
        },
        {
            id: 4,
            title: "Room Cleaning",
            titleDescription: "Organize and vacuum the bedroom",
            name: "LaMelo Ball",
            points: 75
        },
        {
            id: 5,
            title: "Laundry Duty",
            titleDescription: "Wash and fold all clothes",
            name: "LiAngelo Ball",
            points: 60
        },
        {
            id: 6,
            title: "Grocery Run",
            titleDescription: "Buy weekly groceries list",
            name: "Lonzo Ball",
            points: 90
        },
        {
            id: 7,
            title: "Study Session",
            titleDescription: "Read history chapter 3",
            name: "LaMelo Ball",
            points: 85
        },
        {
            id: 8,
            title: "Car Wash",
            titleDescription: "Clean and vacuum the family car",
            name: "LiAngelo Ball",
            points: 45
        },
        {
            id: 9,
            title: "Dog Walking",
            titleDescription: "Walk the dog for 30 mins",
            name: "Lonzo Ball",
            points: 30
        },
        {
            id: 10,
            title: "Book Report",
            titleDescription: "Write report on assigned novel",
            name: "LaMelo Ball",
            points: 110
        },
        {
            id: 11,
            title: "Yard Work",
            titleDescription: "Rake leaves and mow lawn",
            name: "LiAngelo Ball",
            points: 70
        }
    ];

    return (
        <div className="">
            <AssignQuests/>
            <div>
                <div className="relative p-6">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quest Dashboard</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {quests.map((quest) => (
                                <div key={quest.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-bold text-gray-800">{quest.title}</h3>
                                        <p className="text-sm text-gray-600">{quest.titleDescription}</p>
                                        <div className="flex justify-between items-center pt-2">
                                            <span className="text-sm font-medium text-indigo-600">
                                                {quest.name}
                                            </span>
                                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                                                {quest.points} Points
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}