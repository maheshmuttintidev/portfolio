import React from "react";
import Skill from "./skill-card";
import List from "@mui/material/List";

export const skills = [
  {
    title: "HTML5",
    imgUrl: "/skills/html5.svg",
    text: "Hyper Text Markup Language",
    percentage: 45,
  },
  {
    title: "CSS3",
    imgUrl: "/skills/css3.svg",
    text: "Cascaded Style Sheet",
    percentage: 40,
  },
  {
    title: "JavaScript",
    imgUrl: "/skills/js.svg",
    text: "Java Script",
    percentage: 35,
  },
  {
    title: "REACT-JS",
    imgUrl: "/skills/react.svg",
    text: "React JS",
    percentage: 55,
  },
  {
    title: "REACT-NATIVE",
    imgUrl: "/skills/react.svg",
    text: "React Native",
    percentage: 45,
  },
  {
    title: "NODE-JS",
    imgUrl: "/skills/node.svg",
    text: "Node JS",
    percentage: 40,
  },
  {
    title: "KNEX-JS",
    imgUrl: "/skills/js.svg",
    text: "Knex JS",
    percentage: 30,
  },
  {
    title: "PostgreSQL",
    imgUrl: "/skills/js.svg",
    text: "PostgreSQL",
    percentage: 40,
  },
  {
    title: "MongoDB",
    imgUrl: "/skills/js.svg",
    text: "Mongo DB",
    percentage: 25,
  },
];

export default function Skills(): React.ReactElement {
  return (
    <section className="container mt-8 flex flex-wrap px-4 py-3">
      <h2
        className="text-5xl underline underline-offset-4 mb-3 font-bold text-red-400 text-center"
        title="skills"
      >
        <span className="text-4xl text-white">Skills</span>
      </h2>
      <List
        sx={{
          width: "100%",
          justifyContent: "center",
          overflow: "hidden",
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
        }}
      >
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
      </List>
    </section>
  );
}
