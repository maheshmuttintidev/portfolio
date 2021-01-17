import React from "react";
import "./style.css";
import 'font-awesome/css/font-awesome.css';

function Footer() {
  return (
    <footer>
      <h2 className="follow-heading">Follow Me On:</h2>
      <div className="social-media-icon-container">
        <i className="fa fa-facebook-square"></i>
        <i className="fa fa-twitter-square"></i>
        <i className="fa fa-github-square"></i>
        <i className="fa fa-stack-overflow"></i>
        <i className="fa fa-linkedin"></i>
        <i className="fa fa-instagram"></i>
        <i className="fa fa-tumblr"></i>  
      </div>
    </footer>
  );
}
export default Footer;