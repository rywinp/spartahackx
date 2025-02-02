import Header from "@/components/header";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="relative flex items-center justify-center h-[calc(100vh-4rem)]"> {/* Adjust height based on header height */}
        {/* Image Container (Middle Left) */}
        <div className="absolute left-8 top-1/2 transform -translate-y-1/2 w-96 h-96"> {/* Adjust size and position as needed */}
          <Image
            src="/images/your-image.png" // Replace with your image path
            alt="Middle Left Image"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">Hi kid</h1>
        </div>
      </main>
    </div>
  );
}