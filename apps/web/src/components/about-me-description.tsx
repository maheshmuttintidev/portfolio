import React from "react";
// @ts-ignore
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faJs,
  faApple,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase as faDatabaseSolid } from "@fortawesome/free-solid-svg-icons";
import {
  faDatabase,
  faCloud,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  { title: "React JS", icon: faReact },
  { title: "React Native", icon: faReact },
  { title: "Node JS", icon: faNodeJs },
  { title: "HTML", icon: faHtml5 },
  { title: "CSS", icon: faCss3Alt },
  { title: "JavaScript", icon: faJs },
  { title: "MongoDB", icon: faDatabase },
  { title: "Postgres", icon: faDatabaseSolid },
  { title: "Vercel", icon: faCloud },
  { title: "GoDaddy", icon: faGlobe },
  { title: "XCode", icon: faApple },
  { title: "Android Studio", icon: faAndroid },
];

const Skill = ({ icon, title }: any) => {
  return (
    <div className="flex flex-col items-center p-3">
      <FontAwesomeIcon icon={icon} className="text-4xl mb-2 h-12 w-12" />
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
};

export const AboutMeDescription = () => {
  return (
    <section
      id="about"
      className="container flex md:flex-row flex-col gap-4 justify-between items-center p-3 my-custom-card theme-text mt-5 rounded-se-[200px] rounded-bl-[100px]"
    >
      <div className="md:w-2/3 pt-3 hover:scale-90 transition-all">
        <h2 className="md:text-4xl text-3xl text-center font-bold">
          More About Me
        </h2>

        <div className="rounded-sm relative md:pr-5">
          <p className="mt-3 text-center md:text-2xl text-xl px-5">
            {`I'm Mahesh Muttinti, Full Stack Web & Mobile Application Developer with a passion for creating awesome digital experiences. With more than 2 years of experience in React JS, React Native, and Node JS, I specialize in building stunning websites and mobile apps. My technical skills include HTML, CSS, JavaScript, TypeScript, and various libraries and frameworks. I am proficient in developing responsive and dynamic user interfaces.`}
          </p>
          <p className="mt-3 text-center md:text-2xl text-xl pb-5 px-5">
            {`I have worked on various projects, including B2B finance applications and live tracking mobile applications (Android and iOS). My work involves both front-end and back-end development, ensuring seamless integration and performance. I follow best practices in software development, focusing on clean code, modular architecture, and efficient performance. I am a strong advocate of agile methodologies and enjoy working in collaborative environments. I aim to continue expanding my knowledge and skills, keeping up with the latest trends and technologies in web and mobile development. My goal is to deliver exceptional digital solutions that meet the needs of users and clients.`}
          </p>
        </div>
      </div>

      <div className="md:w-1/3 md:translate-x-[-3rem] my-custom-card rounded-md scale-90 hover:scale-100 transition-transform">
        <h2 className="md:text-4xl text-3xl font-bold py-4 text-black">
          Technical Skills
        </h2>
        <div className="flex gap-3 flex-wrap justify-center items-center z-0 rounded-md">
          {skills.map((skill, index) => (
            <Skill
              key={`skill_${index}`}
              icon={skill.icon}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
