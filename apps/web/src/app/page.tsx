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

      <main className="mx-auto pb-8 text-center">
        <div className="flex gap-3 flex-wrap items-center justify-center dark:bg-[#0E1339]">
          <div className="flex flex-[1/4] justify-center items-center rounded-full self-center text-center">
            <Image
              src={"https://i.ibb.co/hKH07Sg/hero.png"}
              height={200}
              width={500}
              className="rounded"
              alt="Mahesh Muttinti Banner Logo"
              title="Mahesh Muttinti Banner Logo"
            />

            {/* <img src="https://i.ibb.co/drYZ6xh/dev-pose-in-chair.png" alt="dev-pose-in-chair" border="0"> */}
            {/* <img src="https://i.ibb.co/MpwCBmL/laptop.png" alt="laptop" border="0"> */}
            {/* <img src="https://i.ibb.co/z27TLdM/prof-look-for-contacting.png" alt="prof-look-for-contacting" border="0"> */}
          </div>

          <div className="self-center items-center">
            <h2 className="md:text-5xl text-2xl font-bold text-blue-500 leading-[4rem] text-center p-3">
              This is{" "}
              <span className="md:text-6xl text-3xl text-white">
                Mahesh Muttinti
              </span>
              <br />
              <span className="text-yellow-500 underline">
                <span className="md:text-6xl text-3xl">
                  Full Stack Web & Mobile Developer
                </span>
              </span>{" "}
            </h2>
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div className="w-2/3 ">
            <h1 className="md:text-5xl text-4xl text-yellow-400">
              More About Me:
            </h1>

            <p className="mt-10 md:text-4xl text-3xl text-justify leading-[3rem]">
              {AboutMeDescription}
            </p>
          </div>
          <div className="w-1/3">
            <Image
              src={"https://i.ibb.co/drYZ6xh/dev-pose-in-chair.png"}
              height={200}
              width={500}
              className="rounded"
              alt="Mahesh Muttinti Banner Logo"
              title="Mahesh Muttinti Banner Logo"
            />
          </div>
        </div>
        <div className="mt-8 flex flex-wrap">
          <h2
            className="text-5xl underline mb-5 font-bold text-yellow-400"
            title="skills"
          >
            <span className="text-6xl">Skills</span>
          </h2>
          <SkillsItemsList />
        </div>
      </main>
    </>
  );
}
