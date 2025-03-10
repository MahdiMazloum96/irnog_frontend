"use client";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent backdrop-blur-xs text-orange-500">
      <h1 className="text-9xl font-extrabold tracking-wider relative">
        404
        <span className="absolute top-0 left-0 right-0 bottom-0 blur-lg opacity-70 text-orange-400">
          404
        </span>
      </h1>
      <p className="text-2xl mt-4 text-orange-400">Oops! Page Not Found</p>
      <p className="text-gray-500 text-center max-w-md mt-2">
        The page you're looking for might be in another universe... 🚀
      </p>

      <div
        className="mt-6 px-6 py-3 bg-orange-500 text-black font-bold rounded-lg shadow-md 
                    hover:bg-orange-600 hover:shadow-lg transition duration-300 transform hover:scale-105  cursor-pointer"
        onClick={() => router.push("/")}
      >
        Take Me Home
      </div>
    </div>
  );
}
