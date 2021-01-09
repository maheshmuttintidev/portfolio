import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function HomePage() {
  const percentage = 73;
  return (
    <div className="app-page">
      <header>
        <div className="logo-container" />
        <div className="website-name-container">
          <h2 className="website-name">WEB THOUGHTS</h2>
        </div>
        <h1 className="main-heading">
          This Website gives you the simple HTML, CSS and JS Tutorials with
          Examples
        </h1>
      </header>
      <article>
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
        <div className="skills-container">
          <div className="progressBar">
            <ProgressBar now={percentage} label={`${percentage}% completed`} />
          </div>
        </div>
      </article>
      <footer>
        <div className="follow-container">
          <h2 className="sub-heading follow">Follow me on: </h2>
          <div className="holder btn-holder">
            <button className="btn btn-green">facebook</button>
            <button className="btn btn-green">instagram</button>
            <button className="btn btn-green">github</button>
            <button className="btn btn-green">codepen</button>
            <button className="btn btn-green">sololearn</button>
          </div>
        </div>
        <div className="copyright-container">
          <p>
            <a href="#">Mahesh Muttinti Creatives</a> &copy; 2021
          </p>
        </div>
      </footer>
    </div>
  );
}
