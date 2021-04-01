import React from 'react';
import Layout from './Layout'

export default function Hobbies() {
  return (
    <Layout>
      <h1 className="">Hobbies</h1>
      <ul className="sub-list">
          <li className="ml-3">Reading Tech Blogs</li>
          <li className="ml-3">Watching Youtube Tech Tutorials</li>
          <li className="ml-3">Researching the different Technologies for software development</li>
          <li className="ml-3">Helping colleagues/friends in web design/development</li>
          <li className="ml-3">Spending time with friends for few moments</li>
      </ul>
    </Layout>
  );
}
