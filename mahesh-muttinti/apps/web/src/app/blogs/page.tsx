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

      <div className="h-full w-full flex flex-col container text-center self-center justify-center m-auto">
        {/* <pre>{JSON.stringify(singleBlog, null, 2)}</pre> */}
        <h3>Under Developement</h3>
      </div>
    </>
  );
}
