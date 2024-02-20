import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex flex-col text-center justify-center mx-auto">
      <h1 className="text-6xl text-red-500 font-bold mb-4">404</h1>
      <p className="text-xl text-purple-800 mb-8">Page Not Found</p>
    </div>
  );
}
