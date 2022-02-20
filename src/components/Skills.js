import React from "react";
import Layout from "./Layout";

const Skills = () => {
  return (
    <Layout active="skills">
      <h1 className="btn">Skills</h1>
      <ul className="sub-list">
        <li className="list-item">HTML(Hyper Text Markup Language)</li>
        <li className="list-item">CSS(Cascaded Style Sheet)</li>
        <li className="list-item">JavaScript</li>
        <li className="list-item">React JS</li>
        <li className="list-item">Node JS</li>
        <li className="list-item">React Native</li>
      </ul>
    </Layout>
  );
};

export default Skills;
