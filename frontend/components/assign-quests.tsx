export default async function AssignQuests () {
    const names = ["Bronny", "Bryce", "JR Smith"];
  return (
    <header className="p-6 border-b-2 border-gray-200">
    <h1 className="mb-4 text-2xl font-bold">Create New Quest</h1>
      <div className="flex flex-col md:flex-row items-stretch justify-between gap-6">
        {/* Left Section: Quest Name and Description */}
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            placeholder="Quest Name"
            className="p-3 text-xl font-semibold rounded-lg border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transform transition duration-300 hover:scale-105"
          />
          <textarea
            placeholder="Quest Description"
            rows={3}
            className="resize-none p-3 text-lg font-medium rounded-lg border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transform transition duration-300 hover:scale-105"
          ></textarea>
        </div>

        {/* Center Section: Children Checklist */}
        <div className="flex flex-col justify-center flex-1 bg-white/70 p-4 rounded-lg shadow-md">
          {names.map((name, idx) => (
            <label
              key={idx}
              className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-purple-50 transition-colors"
            >
              <input
                type="checkbox"
                className="form-checkbox h-6 w-6 text-green-500"
              />
              <span className="text-xl font-bold text-purple-700">{name}</span>
            </label>
          ))}
        </div>

        {/* Right Section: Points and Submit */}
        <div className="flex flex-col justify-between flex-1">
          <input
            type="number"
            placeholder="Points Earned"
            className="p-3 text-xl font-semibold rounded-lg border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transform transition duration-300 hover:scale-105"
          />
          <button
            className="mt-6 p-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-extrabold rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>
    </header>
  );
};
