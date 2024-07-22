import BlogsList from "@/components/posts-list";
import Head from "next/head";
import { Metadata } from "next";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Mahesh Muttinti - Posts",
  description: "Find My Recent Posts in this web page",
  metadataBase: new URL("https://maheshmuttintidev.in/posts"),
  alternates: {
    canonical: "/",
  }
};

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
