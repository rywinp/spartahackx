
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function Header() {
    const user = await currentUser();

  return (
    <header className="flex items-center justify-between p-5 border-b-2 border-gray-200">
      {/* Questopia - Left */}
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text 
      hover:scale-105 transform transition duration-500 ease-in-out">
        <Link href={"/"}>
        <strong>Questopia</strong>
        </Link>
      </h1>

      {/* Hello {user.firstName} - Center */}
      <h1 className="text-4xl font-bold text-gray-800">
        Hello {user?.firstName}!
      </h1>

      {/* UserButton - Right */}
      <div className="flex items-center ml-5 mr-5">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "h-10 w-10 rounded-full", // Custom avatar size and border
              userButtonTrigger: "hover:bg-gray-200", // Hover effect for the button
            },
          }}
        />
      </div>
    </header>
  );
}