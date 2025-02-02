import AssignRewards from "@/components/assign-rewards";

export default async function Rewards() {
  const rewards = [
    {
      id: 1,
      title: "Ice Cream Voucher",
      image: "/images/icecream.svg", // Ensure this SVG exists in your public/images folder
      pointsRequired: 100,
      claimed: true,
      name: "LaMelo Ball",
    },
    {
      id: 2,
      title: "Movie Ticket",
      image: "/images/movie.svg",
      pointsRequired: 75,
      claimed: false,
      name: "LiAngelo Ball",
    },
    {
      id: 3,
      title: "Book Discount",
      image: "/images/book.svg",
      pointsRequired: 50,
      claimed: false,
      name: "Lonzo Ball",
    },
    {
      id: 4,
      title: "Coffee Coupon",
      image: "/images/coffee.svg",
      pointsRequired: 30,
      claimed: true,
      name: "LaMelo Ball",
    },
    {
      id: 5,
      title: "Gaming Voucher",
      image: "/images/gaming.svg",
      pointsRequired: 120,
      claimed: false,
      name: "LiAngelo Ball",
    },
    {
      id: 6,
      title: "Spa Day Pass",
      image: "/images/spa.svg",
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
              className={`bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow ${
                reward.claimed ? "opacity-50" : "opacity-100"
              }`}
            >
              <div className="space-y-2">
                <img
                  src={reward.image}
                  alt={reward.title}
                  className="w-full h-32 object-contain"
                />
                <h3 className="text-lg font-bold text-gray-800">{reward.title}</h3>
                <p className="text-sm text-gray-600">
                  Requires {reward.pointsRequired} Points
                </p>
                <div className="pt-2">
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