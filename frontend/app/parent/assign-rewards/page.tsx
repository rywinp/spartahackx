import AssignRewards from "@/components/assign-rewards";

export default async function Rewards() {
  const rewards = [
    {
      id: 1,
      title: "Ice Cream Voucher",
      image: "/images/icecream.png", // Ensure this SVG exists in your public/images folder
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
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AssignRewards/>
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Rewards Dashboard</h2>
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
                      `Requires ${reward.pointsRequired} Points`
                    )}
                  </p>
                  <span className="text-sm font-medium text-indigo-600">
                    {reward.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}