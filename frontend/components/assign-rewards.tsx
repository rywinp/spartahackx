"use client";

import { useState, ChangeEvent, useRef } from 'react';

const childrenNames = ['Lamelo Ball', 'LiAngelo Ball', 'Lonzo Ball'];

export default function RewardHeader() {
  const [rewardName, setRewardName] = useState('');
  const [points, setPoints] = useState<number | ''>('');
  const [selectedChildren, setSelectedChildren] = useState<string[]>([]);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChildToggle = (name: string) => {
    setSelectedChildren((prev) =>
      prev.includes(name)
        ? prev.filter((child) => child !== name)
        : [...prev, name]
    );
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = () => {
    // You can handle the submit logic here.
    console.log({ rewardName, points, selectedChildren, imagePreview });
  };

  return (
    <header className="p-6 border-b-2 border-gray-200">
      <h1 className="mb-0 text-2xl font-bold">Create New Reward</h1>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Section: Reward Name and Point Requirement */}
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            value={rewardName}
            onChange={(e) => setRewardName(e.target.value)}
            placeholder="Reward Name"
            className="mb-8 p-3 text-xl font-semibold rounded-lg border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transform transition duration-300 hover:scale-105"
          />
          <input
            type="number"
            placeholder="Points Requirement"
            className="p-3 text-xl font-semibold rounded-lg border-2 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transform transition duration-300 hover:scale-105"
          />
        </div>

        {/* Middle Section: Image Upload */}
        <div className="flex flex-col items-center justify-center flex-1">
          <div
            onClick={handleUploadClick}
            className="relative w-48 h-48 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center cursor-pointer hover:scale-105 transform transition duration-300 bg-gray-50"
          >
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Reward"
                className="object-cover w-full h-full rounded-lg"
              />
            ) : (
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16V4a1 1 0 011-1h8a1 1 0 011 1v12m-5 4h.01M12 12v.01M12 12v4m0 0h4m-4 0H8"
                  />
                </svg>
                <p className="mt-2 text-sm text-gray-500">
                  Click to upload image
                </p>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Right Section: Children List and Submit Button */}
        <div className="flex flex-col justify-between flex-1">
          <div className="flex flex-col justify-center bg-white/70 p-4 rounded-lg shadow-md">
            {childrenNames.map((name, idx) => (
              <label
                key={idx}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-purple-50 transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedChildren.includes(name)}
                  onChange={() => handleChildToggle(name)}
                  className="form-checkbox h-6 w-6 text-green-500"
                />
                <span className="text-xl font-bold text-purple-700">{name}</span>
              </label>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="mt-6 p-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-extrabold rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>
    </header>
  );
};