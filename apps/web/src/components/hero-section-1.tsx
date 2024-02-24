"use client";
import React from "react";
import Image from "next/image";
import { DownArrow } from "../svgs/down-arrow";
import Link from "next/link";
import { useWindowSize } from "@/hooks/useWindowSize";

export const HeroSectionOne = () => {
  const size = useWindowSize();
  return (
    <section className="container flex flex-col items-center">
      <section className="flex gap-3 flex-wrap items-center justify-center dark:bg-[#0E1339]">
        <div className="flex flex-[1/4] justify-center items-center rounded-full self-center text-center">
          <Image
            src={"https://i.ibb.co/hKH07Sg/hero.png"}
            height={200}
            width={600}
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
      </section>
      {/* <Link
        href={"#about-me-description"}
        className="flex flex-col items-center gap-2 cursor-pointer"
      >
        <DownArrow />
        <p className="text-xl">Know More</p>
      </Link> */}
    </section>
  );
};
