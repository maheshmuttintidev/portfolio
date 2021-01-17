import React from "react";
import "./style.css";
import avatar from "../assets/avatar.jpg";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1 className="hero-title"> 
          About Me
        </h1>
        <p>
          Hi there, Me help at Programming and Web Development/Design for very Beginners.
          <strong>My Name is Mahesh Muttinti. I am passionate about Programming, Design and Development for WEB.</strong>
          <i>I am still learning the Full Stack Web Development.</i>
        </p>
        <a className="hero-button" href="#">
          Visit My Github Hosted Site
        </a>
      </div>
      <img className="hero-img" src="{avatar}" alt="gravatar" />
    </header>
  );
}
export default Hero;