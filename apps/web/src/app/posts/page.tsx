import BlogsList from "@/components/posts-list";
import Head from "next/head";

export const revalidate = 30;

export default async function Page() {
  return (
    <>
      <Head>
        <title>Mahesh Muttinti | Posts</title>
      </Head>

      <div className="h-full w-full flex flex-col container text-center self-center justify-center m-auto mt-20 md:mt-3">
        {/* @ts-ignore */}
        <BlogsList />
      </div>
    </>
  );
}
