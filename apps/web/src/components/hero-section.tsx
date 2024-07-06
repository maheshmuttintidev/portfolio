import React from "react";
import Image from "next/image";
import HeroSectionImage from "../../public/brand_banner.webp";

export const HeroSection = () => {
  return (
    <section className="flex md:flex-row md:justify-center flex-col gap-3 md:border md:border-1 md:border-teal-400">
      <section className="md:pt-0 md:w-1/2 pt-10">
        <Image
          src={HeroSectionImage}
          className="object-contain"
          alt="Hero Section Banner Image"
          title="Hero Section Banner Image"
        />
      </section>
      <div className="md:mt-0 mt-4 flex flex-col gap-5 justify-center items-center md:w-1/2 self-center text-center px-3">
        <h1 className="md:text-5xl text-4xl text-center font-['Inter'] md:pt-4 pt-0">
          Full Stack Web & Mobile Developer
        </h1>
      </div>
    </section>
  );
};
