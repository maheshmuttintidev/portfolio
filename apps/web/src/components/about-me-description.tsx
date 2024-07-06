import React from "react";
import { skills } from "./skills-list";
import Skill from "./skill-card";

export const AboutMeDescription = () => {
  return (
    <section
      id="about"
      className="container flex md:flex-row flex-col gap-4 justify-between items-center p-3"
    >
      <div className="md:w-2/3">
        <h2 className="md:text-3xl text-4xl text-center font-['Inter'] font-bold">
          More About Me:
        </h2>

        <p className="mt-3 text-justify font-['Inter'] md:text-2xl text-xl">
          {`I'm Mahesh Muttinti, Full Stack Web & Mobile Application Developer
            with a passion for creating awesome digital experiences. With 3
            years of experience in React JS, React Native, and Node JS, I
            specialize in building stunning websites and mobile apps.`}
        </p>
      </div>

      <div className="md:w-1/3">
        <h2 className="md:text-3xl text-4xl font-bold font-['Inter'] py-4">
          Technical Skills:
        </h2>
        <div className="flex gap-3 flex-wrap justify-center items-center z-0">
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
    </section>
  );
};
