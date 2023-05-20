import SkillsItemsList from "../components/SkillsItemsList";
import * as React from "react";
import { getMyPortfolioContent } from "services";
import Head from "next/head";
import "./globals.css";
import BlogsList from "@/components/blogs-list";
import { deepGet } from "./lib/utils/deepGet";

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
      <main className="content p-5">
        <div className="container">
          <h1
            className="pt-5"
            style={{ paddingLeft: 0, borderBottom: "7px solid lime" }}
          >
            Mahesh Muttinti
          </h1>

          <nav>
            <ul>
              <li>
                {/* @ts-ignore */}
                <BlogsList />
              </li>
            </ul>
          </nav>

          <h2 style={{ marginTop: 24, marginBottom: 24, fontSize: 32 }}>
            About Me:
          </h2>
          <p style={{ lineHeight: 2, marginBottom: 24 }}>
            {AboutMeDescription}
          </p>
          <div style={{ marginBottom: 24 }}>
            <h3>Mobile: +919603757304</h3>
            <h3>Twitter: MMuttinti</h3>
            <h3>Instagram: maheshmuttinti</h3>
          </div>
          <h2 style={{ marginBottom: 24, fontSize: 32 }}>Skills:</h2>
          <SkillsItemsList />
        </div>
      </main>

      <footer
        className="container justify-center flex"
        style={{ zIndex: 10, marginTop: 60, paddingBottom: 14 }}
      >
        <p>Developed by Mahesh Muttinti</p>
      </footer>
    </>
  );
}
