import React from "react";
import Header from "./Header";
import Article from "./Article";
import { ProgressBar } from "react-bootstrap";
import Footer from "./Footer";

export default function HomePage() {
  
  return (
    <div className="app-page">
    <Header />
    <article>
      <div className="profile-card-container">
        <h1 className="author-intro-heading">About Author:</h1>
        <div className="profile-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSrKYplxMr-PC7toluw3E0PA3icvqPId9AQ&usqp=CAU"
            className="avatar"
          />
          <div className="introduction">
            <em style={{ fontSize: "1.5em" }}>Hi, there!</em> <br />
            &nbsp;&nbsp;&nbsp;My name is <strong>Mahesh Muttinti</strong>. I am
            a web designer and also developer. I am learning full stack
            development in which my stack to develop the web apps is
            <strong> MERN.</strong>
            <br />
            <br />
            <ul>
              <li>MongoDB refers to M</li>
              <li>Express JS refers to E</li>
              <li>React JS refers to R</li>
              <li>Node JS refers to N</li>
            </ul>
            <br />
            My Hobbies include playing football, listening to music and post
            codes in different platforms like sololearn, codepen etc.,
          </div>
        </div>
      </div>
      <div className="skills-container">
        <h1 className="skill-heading">Skills:</h1>
        <div className="progressBar">
          <ProgressBar now={html} label={`HTML`} style={{ width: "300px" }} />
          <br />
          <ProgressBar now={css} label={`CSS`} style={{ width: "300px" }} />
          <br />
          <ProgressBar now={js} label={`JS`} style={{ width: "300px" }} />
          <br />
          <ProgressBar now={java} label={`JAVA`} style={{ width: "300px" }} />
          <br />
          <ProgressBar
            now={python}
            label={`PYTHON`}
            style={{ width: "300px" }}
          />
          <br />
          <ProgressBar now={react} label={`REACT`} style={{ width: "300px" }} />
          <br />
          <ProgressBar now={node} label={`NODE`} style={{ width: "300px" }} />
          <br />
        </div>
      </div>
    </article>
      
    </div>
  );
}
