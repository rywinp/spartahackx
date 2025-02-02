import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-gradient-to-br from-blue-200 to-purple-400 relative">
        {/* Top Section (Fixed Layout) */}
        <div className="relative flex items-center justify-center h-[calc(100vh-4rem)]">
          {/* Clickable Image Container */}
          <Link href="/child/locker">
            <div className="absolute left-32 top-1/2 transform -translate-y-1/2 w-96 h-96 cursor-pointer">
              <Image
                src="/images/your-image.png" // Replace with your image path
                alt="Locker"
                fill
                className="object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
              />
            </div>
          </Link>

          {/* Text Boxes */}
          <div className="absolute right-40 top-1/2 transform -translate-y-1/2 flex flex-col gap-6">
            {/* Points Earned */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-semibold text-gray-800">Points Earned:</h2>
              <p className="text-2xl font-bold text-purple-600">1,500</p> {/* Replace with dynamic value */}
            </div>

            {/* Current Streak */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-semibold text-gray-800">Current Streak:</h2>
              <p className="text-2xl font-bold text-blue-500">7 days</p> {/* Replace with dynamic value */}
            </div>

            {/* Avatar Level */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-semibold text-gray-800">Avatar Level:</h2>
              <p className="text-2xl font-bold text-green-600">12</p> {/* Replace with dynamic value */}
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="absolute bottom-20 left-0 right-0 border-t-2 border-gray-300"></div>
        </div>

        {/* Scrollable Content Below Divider */}
        <div className="relative mt-12 p-6"> {/* Reduced margin-top to bring content closer */}
          {/* Tasks/Quests Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example Task/Quest */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">Complete Math Homework</h3>
                <p className="text-gray-600">Due: Tomorrow</p>
                <p className="text-gray-600">Reward: 100 Points</p>
              </div>
              {/* Add more tasks/quests here */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">Wash the Dishes</h3>
                <p className="text-gray-600">Due: Tomorrow</p>
                <p className="text-gray-600">Reward: 50 Points</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">Take out the Garbage</h3>
                <p className="text-gray-600">Due: Monday</p>
                <p className="text-gray-600">Reward: 25 Points</p>
              </div>
            </div>
          </div>

          {/* Rewards Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Rewards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example Reward */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">30 Minutes of Video Games</h3>
                <p className="text-gray-600">Cost: 100 Points</p>
              </div>
              {/* Add more rewards here */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">Ice Cream</h3>
                <p className="text-gray-600">Cost: 75 Points</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">YouTube Free Time</h3>
                <p className="text-gray-600">Cost: 200 Points</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}