import SkillsItemsList from "../components/SkillsItemsList";
import * as React from "react";
import { getMyPortfolioContent } from "services";
import Head from "next/head";
import "./globals.css";
import { deepGet } from "./lib/utils/deepGet";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
// import ErrorBoundary from "@/components/error-boundary";

export default async function Web() {
  const response = await getMyPortfolioContent();

  const AboutMeDescription = deepGet(response?.results[0], [
    "heading_2",
    "rich_text",
    0,
    "plain_text",
  ]);

  return (
    <>
      <Head>
        <title>Mahesh Muttinti | Portfolio</title>
      </Head>
      <nav className="mt-10 container m-auto flex gap-4">
        <Link
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-40"
          href="/blogs"
        >
          Blogs
        </Link>
        <Link
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-40"
          href="/projects"
        >
          Projects
        </Link>
      </nav>
      <main className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500">
          <Image
            src={"/main.jpg"}
            height={0}
            width={500}
            style={{ height: 500, width: "100%" }} // fill={true}
            alt="Mahesh Muttinti Banner Logo"
            title="Mahesh Muttinti Banner Logo"
          />
        </div>
        <h1
          title="Mahesh Muttinti Main Text"
          className="pt-2 border-t-2 border-white pl-0 text-4xl font-extrabold"
        >
          Mahesh Muttinti
        </h1>

        <h2 className="mt-8 underline text-3xl font-bold">About Me:</h2>
        <p className="mt-4">{AboutMeDescription}</p>
        <div className="mt-5">
          <h3>
            Mobile:{" "}
            <b className="hover:underline active:underline cursor-pointer">
              +919603757304
            </b>
          </h3>
          <h3>
            Twitter:{" "}
            <b className="hover:underline active:underline cursor-pointer">
              @mmuttinti
            </b>
          </h3>
          <h3>
            Instagram:{" "}
            <b className="hover:underline active:underline cursor-pointer">
              @maheshmuttinti
            </b>
          </h3>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl underline mb-5 font-bold">Skills:</h2>
          <SkillsItemsList />
        </div>
        <Footer />
      </main>
    </>
  );
}
