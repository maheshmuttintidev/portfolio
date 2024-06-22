import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex flex-col text-center justify-center items-center mx-auto">
      <h1 className="text-6xl text-red-500 font-bold mb-4">404</h1>
      <p className="text-xl text-red-600 mb-8">Page Not Found</p>
      <Link
        prefetch={false}
        href={"/"}
        className="text-white from-violet-300 font-bold to-violet-400 bg-gradient-to-r w-max rounded-sm p-2"
      >
        Go to Home Page
      </Link>
    </div>
  );
}
