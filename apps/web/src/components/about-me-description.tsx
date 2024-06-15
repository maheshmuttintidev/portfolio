"use client";
import React from "react";
import Image from "next/image";
import { skills } from "./skills-list";
import Skill from "./skill-card";

export const AboutMeDescription = () => {
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
      className="container p-5 mt-4 flex flex-wrap gap-4 justify-end items-center py-3"
    >
      <div className="flex flex-wrap justify-end bg-[url('https://i.ibb.co/drYZ6xh/dev-pose-in-chair.png')] h-screen bg-contain bg-no-repeat">
        <div className="w-2/3">
          <p className="text-2xl text-white text-end font-['Holtwood One SC']">
            More About Me:
          </p>

          <p className="mt-3 text-end font-['Inter']">
            {`I'm Mahesh Muttinti, a Full Stack Web & Mobile Application Developer
            with a passion for creating awesome digital experiences. With 3
            years of experience in React JS, React Native, and Node JS, I
            specialize in building stunning websites and mobile apps`}
          </p>
          <div className="flex gap-3">

          {skills?.map((skill, index) => (
            <Skill
              key={`skill_${index}`}
              title={skill?.title || ""}
              text={skill?.text || ""}
              imgUrl={skill?.imgUrl || ""}
              percentage={skill?.percentage || 0}
              length={skills?.length}
            />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
