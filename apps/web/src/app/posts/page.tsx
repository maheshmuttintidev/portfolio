import BlogsList from "@/components/posts-list";
import Head from "next/head";
import { Metadata } from "next";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Mahesh Muttinti - Posts",
  description: "Find My Recent Posts in this web page",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      new URL("/favicon.ico", "https://maheshmuttintidev.in"),
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  metadataBase: new URL("https://maheshmuttintidev.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mahesh Muttinti - Posts",
    description: "Find My Recent Posts in this web page.",
    url: "https://maheshmuttintidev.in",
    siteName: "Mahesh Muttinti - Posts",
    locale: "en",
    type: "website",
    // @ts-ignore
    image: "https://maheshmuttintidev.in/brand_banner.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahesh Muttinti - Posts",
    description: "Find My Recent Posts in this web page.",
    creator: "@MaheshMuttinti",
    images: ["https://maheshmuttintidev.in/brand_banner.webp"],
  },
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
