import React from "react";
import Image from "next/image";
import { getMyPortfolioContent } from "services";
import { deepGet } from "@/app/lib/utils/deepGet";

export const AboutMeDescription = async () => {
  const response = await getMyPortfolioContent();

  const aboutFromApi = deepGet(response?.results?.[0], [
    "heading_2",
    "rich_text",
    0,
    "plain_text",
  ]);

  return (
    <section
      id="about-me-description"
      className="container flex flex-row flex-wrap gap-4 justify-center items-center mt-10 bg-slate-500 py-3"
    >
      <div className="w-2/3">
        <h1 className="md:text-5xl text-4xl">More About Me:</h1>

        <p className="mt-10 md:text-4xl text-2xl text-justify leading-[2.5rem]">
          {aboutFromApi}
        </p>
      </div>
      <div className="w-1/3">
        <Image
          src={"https://i.ibb.co/drYZ6xh/dev-pose-in-chair.png"}
          height={200}
          width={500}
          className="rounded"
          alt="Mahesh Muttinti Banner Logo"
          title="Mahesh Muttinti Banner Logo"
        />
      </div>
    </section>
  );
};
