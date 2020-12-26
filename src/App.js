import React, { useState } from "react";
import ReactDom from "react-dom";
import "./style.css";

export default function App() {
  return (
    <div className="app-page">
      <header>
        <h1 className="main-heading">Portfolio</h1>
      </header>
      <article>
        <div className="profile-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNSrKYplxMr-PC7toluw3E0PA3icvqPId9AQ&usqp=CAU"
            className="avatar"
          />
          <div className="introduction">
            <table>
              <tr>
                <th>Name: </th>
                <td>Mahesh Muttinti</td>
              </tr>
              <tr>
                <th>Skills: </th>
                <td>HTML, CSS, JS</td>
              </tr>
              <tr>
                <th>Hobbies: </th>
                <td>Playing Football, Coding and Listening to Music</td>
              </tr>
            </table>
          </div>
        </div>
      </article>
    </div>
  );
}
