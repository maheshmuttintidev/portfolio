import React from "react";
import { skills } from "./skills-list";
import Skill from "./skill-card";

export const AboutMeDescription = () => {
  return (
    <section
      id="about"
      className="container flex flex-wrap gap-4 justify-end items-center p-3"
    >
      <div className="flex flex-wrap justify-center ">
        {/* bg-[url('https://i.ibb.co/drYZ6xh/dev-pose-in-chair.png')] bg-contain bg-no-repeat */}
        <div className="flex flex-wrap gap-5 justify-center items-center">
          <div className="">
            <p className="md:text-3xl text-4xl text-white text-center font-['Inter'] font-bold">
              More About Me:
            </p>

            <p className="mt-3 text-center font-['Inter'] md:text-2xl text-xl">
              {`I'm Mahesh Muttinti, a Full Stack Web & Mobile Application Developer
            with a passion for creating awesome digital experiences. With 3
            years of experience in React JS, React Native, and Node JS, I
            specialize in building stunning websites and mobile apps`}
            </p>
          </div>

          <div className="">
            <h3 className="md:text-3xl text-4xl font-bold font-['Inter'] py-4">
              Technical Skills:
            </h3>
            <div className="flex gap-3 flex-wrap justify-center items-center">
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
      </div>
    </section>
  );
};
