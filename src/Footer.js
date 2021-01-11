import React from "react";
import "./style.css";

export default function Footer() {
  return (
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
  );
}
