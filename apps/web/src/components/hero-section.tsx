import React from "react";
import Image from "next/image";
import HeroSectionImage from "../../public/brand_banner.webp";

export const HeroSection = () => {
  return (
    <section className="flex md:flex-row md:justify-center flex-col gap-3 md:border md:border-1 md:border-slate-200 shadow-lg rounded-md nav-theme-bg">
      <section className="md:pt-0 md:w-1/2 rounded-md">
        <Image
          src={HeroSectionImage}
          fetchPriority="high"
          priority
          className="object-contain rounded-md"
          alt="Hero Section Banner Image"
          title="Hero Section Banner Image"
        />
      </section>
      <div className="md:mt-0 mt-4 flex flex-col gap-5 justify-center items-center md:w-1/2 self-center text-center px-3">
        <h1 className="md:text-4xl text-3xl text-center font-['Inter'] pt-0 font-bold pb-4">
          <span className="md:text-5xl text-4xl">F</span>ull{" "}
          <span className="md:text-5xl text-4xl">S</span>tack{" "}
          <span className="md:text-5xl text-4xl">W</span>eb &{" "}
          <span className="md:text-5xl text-4xl">M</span>obile{" "}
          <span className="md:text-5xl text-4xl">A</span>pplication{" "}
          <span className="md:text-5xl text-4xl">D</span>eveloper
        </h1>
      </div>
    </section>
  );
};
