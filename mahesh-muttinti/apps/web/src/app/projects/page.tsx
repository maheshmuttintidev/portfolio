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
        <div className="flex flex-wrap md:[&>*]:w-1/2 md:[&>*]:p-10 [&>*]:mb-10">
          <iframe
            src={"https://telnewz.in"}
            className="h-[30rem] container"
          />
          <iframe
            src={"https://lokesh-doppasani.vercel.app"}
            className="h-[30rem] container"
          />
          <iframe
            src={"https://sagar-abbathi.vercel.app"}
            className="h-[30rem] container"
          />
          <iframe
            src={"https://notion-to-md-converter.vercel.app"}
            className="h-[30rem] container"
          />
          <iframe
            src={"https://rajareddy.vercel.app/"}
            className="h-[30rem] container"
          />
          <iframe
            src={"https://govardhan-kodimindla.vercel.app"}
            className="h-[30rem] container"
          />
          <iframe
            src={"https://gangababu.vercel.app/"}
            className="h-[30rem] container"
          />
          <iframe
            src={"https://machinecode.in/"}
            className="h-[30rem] container"
          />
        </div>
      </div>
    </>
  );
}
