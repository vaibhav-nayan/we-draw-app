import Link from "next/link";

export default function Home() {
  return (
    <div className="text-3xl font-bold w-screen h-screen gap-4 flex flex-col justify-center items-center">
      <div className="flex gap-2">
        <div>
          Landing Page
        </div>
        <div className=" text-gray-500">
          (in progress..)
        </div>
      </div>
      <div className="flex gap-2">
        <Link href={"/signin"}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-light px-4 py-2 rounded">Sign In</button>
        </Link>
        <Link href={"/signup"}>
          <button className="bg-gray-900 hover:bg-gray-800 border text-white font-light text-sm px-4 py-2 rounded">Sign Up</button>
        </Link>
      </div>
    </div>
  );
}
