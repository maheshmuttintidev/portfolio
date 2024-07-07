import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex flex-col text-center justify-center items-center mx-auto md:mt-0 mt-6">
      <h1 className="text-6xl text-red-500 font-bold mb-4">404</h1>
      <p className="text-xl text-red-600 mb-8">Page Not Found</p>
      <Link
        prefetch={false}
        href={"/"}
        title="Home Page"
        className="text-white from-violet-400 font-bold to-violet-600 bg-gradient-to-r w-max rounded-md p-2"
      >
        Go to Home Page
      </Link>
    </div>
  );
}
