"use client";
import React from "react";
import Image from "next/image";
import { FramerMotionWrapper } from "./framer-motion-wrapper";

export const HeroSectionOne = () => {
  return (
    <FramerMotionWrapper>
      <section className="flex flex-col items-center">
        <section className="flex gap-3 flex-wrap items-center justify-center dark:bg-[#0E1339]">
          <div className="flex justify-center items-center rounded-full self-center text-center">
            <Image
              src={"https://i.ibb.co/hKH07Sg/hero.png"}
              height={200}
              width={600}
              className="rounded"
              alt="Mahesh Muttinti Banner Logo"
              title="Mahesh Muttinti Banner Logo"
            />
          </div>

          {/* <div className="self-center items-center px-4">
            <h2 className="md:text-5xl text-2xl font-bold text-blue-500 leading-[2.5rem] text-center">
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
          </div> */}
        </section>
      </section>
    </FramerMotionWrapper>
  );
};
