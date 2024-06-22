"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DownArrow } from "../svgs/down-arrow";
import HeroSectionImage from "../../public/banner_image_2.png";

export const HeroSectionOne = () => {
  return (
    <>
      <section className="md:pt-4 pt-10">
        {/* <Image
          src={HeroSectionImage}
          className="object-contain h-40"
          alt="Hero Section Banner Image"
        /> */}
      </section>
      <div className="flex flex-col gap-5 justify-center items-center md:self-end self-center text-center px-3">
        <h1 className="text-blue-500 leading-[2.5rem] text-center pt-4">
          <span className="md:text-8xl text-6xl text-white font-['Jomhuria']">
            This is{" "}
          </span>
          <span className="md:text-[5rem] text-[3rem] text-white font-['Holtwood One SC']">
            Mahesh Muttinti
          </span>
          <br />
          <span className="md:text-8xl text-6xl text-yellow-500 underline font-['Jomhuria']">
            Full Stack Web & Mobile Developer
          </span>{" "}
        </h1>
        <Link href="#about">
          <DownArrow />
        </Link>
      </div>
    </>
  );
};
