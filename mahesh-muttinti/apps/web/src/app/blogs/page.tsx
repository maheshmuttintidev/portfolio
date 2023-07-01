"use client";

import Head from "next/head";
import Link from "next/link";
import { useParams } from "next/navigation";
// import { getSinglePost } from "services";

export default async function Page() {
  const params = useParams();
  const slug = params?.slug?.split("-").join(" ");
  // const singleBlog = await getSinglePost(`${slug}`);

  return (
    <>
     <Head>
        <title>Mahesh Muttinti | Blogs</title>
      </Head>
      <nav className="mt-10 container m-auto flex gap-4">
        <Link
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-40"
          href="/"
        >
          Home
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-40"
          href="/projects"
        >
          Projects
        </Link>
        
      </nav>
      <div className="h-full w-full flex flex-col container text-center self-center justify-center m-auto">
        <h1 className="text-2xl">Blogs</h1>
        {/* <pre>{JSON.stringify(singleBlog, null, 2)}</pre> */}
      </div>
    </>
  );
}
