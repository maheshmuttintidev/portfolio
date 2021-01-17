import React from "react";
import "./style.css";
import 'font-awesome/css/font-awesome.min.css';

function Footer() {
  return (
    <footer>
      <h2 className="follow-heading">Follow Me On:</h2>
      <div className="social-media-icon-container">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-github"></i>
        <i className="fab fa-stack-overflow"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </footer>
  );
}
export default Footer;