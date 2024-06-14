"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DownArrow } from "../svgs/down-arrow";

export const HeroSectionOne = () => {
  return (
    <div>
      <section className="flex flex-col gap-3 flex-wrap items-center justify-center dark:bg-[#0E1339] h-screen w-full bg-[url('https://i.ibb.co/hKH07Sg/hero.png')] bg-contain bg-left bg-no-repeat">
        <div className="flex flex-col gap-5 justify-center items-center self-end text-center">
          <h1 className="text-blue-500 leading-[2.5rem] text-center pt-4">
            <span className="text-8xl text-white font-['Jomhuria']">
              This is{" "}
            </span>
            <span className="text-[5rem] text-white font-['Holtwood One SC']">
              Mahesh Muttinti
            </span>
            <br />
            <span className="text-8xl text-yellow-500 underline font-['Jomhuria']">
              Full Stack Web & Mobile Developer
            </span>{" "}
          </h1>
          <Link href="#about">
            <DownArrow />
          </Link>
        </div>
      </section>
    </div>
  );
};
