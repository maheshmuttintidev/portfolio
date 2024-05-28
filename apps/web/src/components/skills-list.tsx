'use client';
import React from "react";
import Skill from "./skill-card";
import List from "@mui/material/List";

const skills = [
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
    title: "JS",
    imgUrl: "/skills/js.svg",
    text: "JavasScript",
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
    percentage: 25,
  },
];

export default function Skills(): React.ReactElement {
  return (
    <>
      <section className="container mt-8 flex flex-wrap bg-slate-100 px-4 py-3">
        <h2
          className="text-5xl underline mb-3 font-bold text-black text-center"
          title="skills"
        >
          <span className="text-4xl">Skills</span>
        </h2>
        <List
          sx={{
            width: "100%",
            marginLeft: "auto",
            justifyContent: "center",
            backgroundColor: "transparent",
            overflow: "hidden",
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
          }}
        >
          {skills?.map((skill, index) => (
            <Skill
              key={index}
              title={skill?.title || ""}
              text={skill?.text || ""}
              imgUrl={skill?.imgUrl || ""}
              percentage={skill?.percentage || 0}
              length={skills?.length}
            />
          ))}
        </List>
      </section>
    </>
  );
}
