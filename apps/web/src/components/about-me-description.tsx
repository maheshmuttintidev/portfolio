import React from "react";
import Image from "next/image";
import { getMyPortfolioContent } from "services";
import { deepGet } from "@/app/lib/utils/deepGet";

export const AboutMeDescription = async () => {
  // const response = await getMyPortfolioContent();

  // const aboutFromApi = deepGet(response?.results?.[0], [
  //   "heading_2",
  //   "rich_text",
  //   0,
  //   "plain_text",
  // ]);

  return (
    <section
      id="about"
      className="container min-h-screen p-5 mt-4 flex gap-4 justify-center items-center bg-slate-500 py-3"
    >
        <div className="">
        <Image
          src={"https://i.ibb.co/drYZ6xh/dev-pose-in-chair.png"}
          height={200}
          width={500}
          className="rounded"
          alt="Mahesh Muttinti Banner Logo"
          title="Mahesh Muttinti Banner Logo"
        />
      </div>
      <div className='w-[45%]'>
      <p className="text-[3rem] text-white font-['Holtwood One SC']">
          More About Me:
        </p>

        <p className="mt-10 md:text-4xl text-2xl text-justify leading-[2.5rem] font-['Inter']">
        I'm Mahesh Muttinti, a Full Stack Web & Mobile Application Developer with a passion for creating awesome digital experiences. With 3 years of experience in React JS, React Native, and Node JS, I specialize in building stunning websites and mobile apps. 
        </p>
        </div>
    
    </section>
  );
};
