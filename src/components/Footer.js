import React from "react";
import "./style.css";
import 'font-awesome/css/font-awesome.css';

function Footer() {
  return (
    <footer>
      <h2 className="follow-heading">Follow Me On:</h2>
      <div className="social-media-icon-container">
        <a href="https://m.facebook.com/maheshmuttinti" target="_blank">
          <i className="fa fa-facebook-square"></i>
        </a>
        <a href="https://twitter.com/MMuttinti" target="_blank">
          <i className="fa fa-twitter-square"></i>
        </a>
        <a href="https://github.com/mahesh-muttinti" target="_blank">
          <i className="fa fa-github-square"></i>
        </a>
        <a href="https://stackoverflow.com/users/15017210/mahesh-muttinti" target="_blank">
          <i className="fa fa-stack-overflow"></i>
        </a> 
        <a href="https://www.linkedin.com/in/mahesh-muttinti-4a2b61202/" target="_blank">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/mahesh_muttinti/" target="_blank">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="http://mahesh-muttinti.tumblr.com" target="_blank">
          <i className="fa fa-tumblr"></i>
        </a>
      </div>
    </footer>
  );
}
export default Footer;