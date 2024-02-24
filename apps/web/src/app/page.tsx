import SkillsItemsList from "../components/skills-list";
import * as React from "react";
import Head from "next/head";
import "./globals.css";
import { HeroSectionOne } from "../components/hero-section-1";
import { AboutMeDescription } from "@/components/about-me-description";
import Skills from "../components/skills-list";
import { Contact } from "../components/contact";

export const revalidate = 30;
export default async function Web() {
  return (
    <>
      <Head>
        <title>Mahesh Muttinti | Portfolio</title>
      </Head>

      <main className="mx-auto pb-8 text-center scroll-smooth snap-y snap-mandatory h-screen w-screen container overflow-scroll snap-center">
        <HeroSectionOne />
        {/* @ts-ignore */}
        <AboutMeDescription />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
