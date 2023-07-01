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
          href="/blogs"
        >
          Blogs
        </Link>
      </nav>
      <div className="h-full w-full flex flex-col container text-center self-center justify-center m-auto">
        <h1 className="text-2xl">Projects</h1>
        <div className="flex flex-wrap [&>*]:w-1/2 [&>*]:p-10">
          <iframe src={"https://telnewz.in"} className="h-[30rem] container border border-red-500 border-4 " />
          <iframe
            src={"https://lokesh-doppasani.vercel.app"}
            className="h-[30rem] container border border-red-500 border-4"
          />
          <iframe
            src={"https://sagar-abbathi.vercel.app"}
            className="h-[30rem] container border border-red-500 border-4"
          />
          <iframe
            src={"https://notion-to-md-converter.vercel.app"}
            className="h-[30rem] container border border-red-500 border-4"
          />
          <iframe
            src={"https://rajareddy.vercel.app/"}
            className="h-[30rem] container border border-red-500 border-4"
          />
          <iframe
            src={"https://govardhan-kodimindla.vercel.app"}
            className="h-[30rem] container border border-red-500 border-4"
          />
          <iframe
            src={"https://gangababu.vercel.app/"}
            className="h-[30rem] container border border-red-500 border-4"
          />
           <iframe
            src={"https://machinecode.in/"}
            className="h-[30rem] container border border-red-500 border-4"
          />
        </div>
      </div>
    </>
  );
}
