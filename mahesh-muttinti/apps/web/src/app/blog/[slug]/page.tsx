"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
// import { getSinglePost } from "services";

export default async function Page() {
  const params = useParams();
  const slug = params?.slug?.split("-").join(" ");
  // const singleBlog = await getSinglePost(`${slug}`);

  return (
    <div>
      <h1 className="text-2xl">Single Blog Post</h1>
      {/* <pre>{JSON.stringify(singleBlog, null, 2)}</pre> */}
      <Link
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        href="/"
      >
        Home
      </Link>
    </div>
  );
}
