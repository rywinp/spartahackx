import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

// Interface definitions
interface Quest {
  id: number;
  title: string;
  description: string;
  image: string;
  reward: number;
  claimed: boolean;
}

interface Reward {
  id: number;
  title: string;
  value: number;
  claimed: boolean;
}

export default async function Home() {
  // User data
  const avatarLevel = 12;
  const currentStreak = 7;
  const pointsEarned = 1500;
  const avatar_src = "/images/avatar.png";

  // Provided quests data (raw)
  const rawQuests = [
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

  // Provided rewards data (raw)
  const reward = [
    {
      id: 1,
      title: "Ice Cream Voucher",
      image: "/images/icecream.png", // not used in the interface
      pointsRequired: 100,
      claimed: true,
      name: "LaMelo Ball",
    },
    {
      id: 2,
      title: "Movie Ticket",
      image: "/images/movie.png",
      pointsRequired: 75,
      claimed: false,
      name: "LiAngelo Ball",
    },
    {
      id: 3,
      title: "Vacation to Hawaii",
      image: "/images/hawaii.png",
      pointsRequired: 50,
      claimed: false,
      name: "Lonzo Ball",
    },
    {
      id: 4,
      title: "Basketball Toy",
      image: "/images/basketball.png",
      pointsRequired: 30,
      claimed: true,
      name: "LaMelo Ball",
    },
    {
      id: 5,
      title: "Playstation 5",
      image: "/images/ps5.png",
      pointsRequired: 120,
      claimed: false,
      name: "LiAngelo Ball",
    },
    {
      id: 6,
      title: "RC Plane",
      image: "/images/plane.png",
      pointsRequired: 150,
      claimed: false,
      name: "Lonzo Ball",
    }
  ];

  // Transform and filter to only include items associated with "LaMelo Ball"
  const quests: Quest[] = rawQuests
    .filter(q => q.name === "LaMelo Ball")
    .map(q => ({
      id: q.id,
      title: q.title,
      description: q.titleDescription,
      image: "/images/quest.png", // placeholder image for quests
      reward: q.points,
      claimed: false // assume unclaimed; adjust as needed
    }));

  const rewards: Reward[] = reward
    .filter(r => r.name === "LaMelo Ball")
    .map(r => ({
      id: r.id,
      title: r.title,
      value: r.pointsRequired,
      claimed: r.claimed,
      image: r.image
    }));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative">
        {/* Top Section (Fixed Layout) */}
        <div className="relative flex items-center justify-center h-72">
          {/* Clickable Image Container (Avatar) */}
          <Link href="/child/locker">
            <div className="absolute left-32 top-1/2 transform -translate-y-1/2 w-64 h-64 cursor-pointer">
              <Image
                src={avatar_src}
                alt="Locker"
                fill
                className="object-cover rounded-lg shadow-lg hover:opacity-90 transition-opacity"
              />
            </div>
          </Link>

          {/* Statistics Section */}
          <div className="absolute right-32 top-1/2 transform -translate-y-1/2 flex gap-4">
            {[
              { label: "Points Earned", value: pointsEarned, color: "text-purple-600" },
              { label: "Current Streak", value: `${currentStreak} days`, color: "text-blue-500" },
              { label: "Avatar Level", value: avatarLevel, color: "text-green-600" }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h2 className="text-3xl font-semibold text-gray-800">{stat.label}</h2>
                <p className={`text-4xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Horizontal Divider */}
          <div className="absolute bottom-4 left-0 right-0 border-t-2 border-gray-300"></div>
        </div>

        {/* Scrollable Content Below Divider */}
        <div className="relative pl-6 pr-6">
          {/* Quests Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {quests.map((quest) => (
                <div
                  key={quest.id}
                  className={`bg-white p-4 rounded-lg shadow-md ${quest.claimed ? 'opacity-50' : ''}`}
                >
                  <h3 className="text-lg font-semibold text-gray-800">{quest.title}</h3>
                  <p className="text-gray-600">{quest.description}</p>
                  <p className="text-gray-600">Reward: {quest.reward} Points</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rewards Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Rewards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow relative"
            >
              {/* Claimed overlay */}
              {reward.claimed && (
                <>
                  <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg" />
                  <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Claimed!
                  </div>
                </>
              )}
              
              <div className={`space-y-2 ${reward.claimed ? 'opacity-75' : ''}`}>
                <img
                  src={reward.image}
                  alt={reward.title}
                  className={`w-full h-32 object-contain ${reward.claimed ? 'grayscale' : ''}`}
                />
                <h3 className={`text-lg font-bold ${reward.claimed ? 'text-gray-400 line-through' : 'text-gray-800'}`}>
                  {reward.title}
                </h3>
                <div className="flex justify-between items-center">
                  <p className={`text-sm ${reward.claimed ? 'text-gray-400' : 'text-gray-600'}`}>
                    {reward.claimed ? (
                      <span className="text-green-600 font-medium">Enjoy your reward!</span>
                    ) : (
                      `Requires ${reward.value} Points`
                    )}
                  </p>
                  <span className="text-sm font-medium text-indigo-600">
                    {reward.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
          </div>
        </div>
      </main>
    </div>
  );
}
