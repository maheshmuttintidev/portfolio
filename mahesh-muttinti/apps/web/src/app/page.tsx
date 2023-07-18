import SkillsItemsList from "../components/skills-list";
import * as React from "react";
import { getMyPortfolioContent } from "services";
import Head from "next/head";
import "./globals.css";
import { deepGet } from "./lib/utils/deepGet";
import Image from "next/image";

export const revalidate = 30;
export default async function Web() {
  const response = await getMyPortfolioContent();

  const AboutMeDescription = deepGet(response?.results?.[0], [
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

      <main className="container mx-auto pb-8 text-center">
        <div className="shadow-xl flex gap-3 flex-wrap items-center justify-center dark:bg-black">
          <div className="flex flex-[1/4] max-w-[20rem] justify-center items-center rounded-full self-center text-center">
            <Image
              src={"/main.jpg"}
              height={200}
              width={500}
              className="rounded"
              alt="Mahesh Muttinti Banner Logo"
              title="Mahesh Muttinti Banner Logo"
            />
          </div>

          <div className="self-center items-center">
            <h2 className="md:text-5xl text-2xl font-bold text-blue-500 leading-[4rem] text-center p-3">
              Full Stack{" "}
              <span className="font-sans text-red-500 underline">
                <span className="md:text-6xl text-3xl">M</span>obile
              </span>{" "}
              <br />
              And{" "}
              <span className="font-sans text-yellow-500 underline">
                <span className="md:text-6xl text-3xl">W</span>eb
              </span>{" "}
              Developer!
            </h2>
          </div>
        </div>

        <p className="mt-10 font-sans md:text-4xl text-2xl text-justify leading-[3rem]">
          {AboutMeDescription}
        </p>

        <div className="mt-8 flex flex-wrap">
          <h2
            className="text-5xl underline mb-5 font-bold text-yellow-400"
            title="skills"
          >
            <span className="font-sans text-6xl">S</span>kills
          </h2>
          <SkillsItemsList />
        </div>
      </main>
    </>
  );
}
