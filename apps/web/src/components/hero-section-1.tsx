"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DownArrow } from "../svgs/down-arrow";
import HeroSectionImage from "../../public/banner/brand_banner.jpg";

export const HeroSectionOne = () => {
  return (
    <>
      <section className="md:pt-4 pt-10">
        <Image
          src={HeroSectionImage}
          className="object-contain"
          alt="Hero Section Banner Image"
        />
      </section>
      <div className="mt-4 flex flex-col gap-5 justify-center items-center md:self-end self-center text-center px-3">
        <h1 className="text-blue-500 leading-[2.5rem] text-center font-['Inter'] pt-4">
          <span className="md:text-[5rem] text-[3rem] text-white">
            Mahesh Muttinti
          </span>
          <br />
          <span className="md:text-5xl text-4xl text-yellow-500 underline">
            Full Stack Web & Mobile Developer
          </span>{" "}
        </h1>
        <Link href="#about" className="mb-6">
          <DownArrow />
        </Link>
      </div>
    </>
  );
};
