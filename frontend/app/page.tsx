import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-200 to-purple-400 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Pretty Questopia font */}
      <h1 className="text-8xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text py-4 font-fredoka mt-16">
        <strong>Questopia</strong>
      </h1>

      {/* Animated Images */}
      <div className="flex items-center justify-center gap-8">
        {/* First Image */}
        <div className="relative w-24 h-24 animate-wiggle">
          <Image
            src="/images/calculator.png" // Replace with your first image path
            alt="Calculator"
            fill
            className="object-contain"
          />
        </div>

        {/* Second Image */}
        <div className="relative w-24 h-24 animate-wiggle">
          <Image
            src="/images/graduationcap.png" // Replace with your second image path
            alt="Graduation Cap"
            fill
            className="object-contain"
          />
        </div>

        {/* Third Image */}
        <div className="relative w-24 h-24 animate-wiggle">
          <Image
            src="/images/notebook.png" // Replace with your third image path
            alt="Notebook"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Play Button with "Play" text and logo */}
      <div className="flex flex-col items-center gap-4">
        {/* Play Button */}
        <button className="w-64 h-24 bg-gradient-to-r from-purple-600 to-blue-500 flex flex-col items-center justify-center shadow-lg hover:from-purple-700 hover:to-blue-600 transition-all rounded-lg text-white text-xl font-bold animate-pulse font-comic-sans">
          <span>Play</span> {/* "Play" text */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 mt-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
          </svg>
        </button>

        {/* Horizontal Divider */}
        <div className="w-full border-t-2 border-purple-500 my-4"></div>
      </div>

      {/* Parent and Signup buttons */}
      <div className="flex gap-6 mt-4">
        <Button className="bg-purple-600 hover:from-pink-600 hover:to-orange-500 text-lg px-8 py-6 font-comic-sans">
          Parent
        </Button>
        <Button className="bg-blue-500 hover:from-blue-500 hover:to-green-500 text-lg px-8 py-6 font-comic-sans">
          Sign Up
        </Button>
      </div>
    </div>
  );
}