import React from 'react';
import Layout from './Layout'

export default function Hobbies() {
  return (
    <Layout active="hobbies">
      <h1 className="btn">Hobbies</h1>
      <ul className="sub-list">
          <li className="list-item">Reading Tech Blogs</li>
          <li className="list-item">Watching Youtube Tech Tutorials</li>
          <li className="list-item">Researching the different Technologies for software development</li>
          <li className="list-item">Helping colleagues/friends in web design/development</li>
          <li className="list-item">Spending time with friends for few moments</li>
      </ul>
    </Layout>
  );
}
