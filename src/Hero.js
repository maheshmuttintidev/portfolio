import React from "react";
import "./style.css";
import avatar from "./avatar.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title"> 
          About Me
        </h1>
        <p className="hero-para">
          Hi there, Me help at Programming and Web Development/Design for very Beginners.
          <strong>My Name is Mahesh Muttinti. I am passionate about Programming, Design and Development for WEB.</strong>
          <i>I am still learning the Full Stack Web Development.</i>
        </p>
        <a className="hero-button" target="_blank" href="https://mahesh-muttinti.github.io">
          Visit My Github Hosted Site
        </a>
      </div>
      <img className="hero-img" src={avatar} alt="gravatar" />
    </section>
  );
}
export default Hero;