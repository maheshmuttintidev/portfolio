'use client';
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {DownArrow} from '../svgs/down-arrow'

export const HeroSectionOne = () => {
  return (
    <div >
      {/* <section className="flex flex-col items-center"> */}
        <section className="flex flex-col gap-3 flex-wrap items-center justify-center dark:bg-[#0E1339]">
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

          <div className="">
            <h2 className="text-blue-500 leading-[2.5rem] text-center pt-4">
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
            </h2>
          </div>
          <Link href="#about">
            <DownArrow />
          </Link>
      </section>
    </div>
  );
};
