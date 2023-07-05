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

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center rounded-full">
          <Image
            src={"/main.jpg"}
            height={200}
            width={500}
            className="rounded-full"
            alt="Mahesh Muttinti Banner Logo"
            title="Mahesh Muttinti Banner Logo"
          />
        </div>
      

        <h2 className="mt-8 text-5xl font-bold">Full Stack Mobile <br />And Web Developer!</h2>
        <p className="mt-4">{AboutMeDescription}</p>

        <div className="mt-8">
          <h2 className="text-3xl underline mb-5 font-bold">Skills:</h2>
          <SkillsItemsList />
        </div>
        <Footer />
      </main>
    </>
  );
}
