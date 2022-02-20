import React from 'react'
import Layout from './Layout'
export default function Interests() {
  return (
    <Layout active="interests">
      <h1 className="btn">Interests</h1>
      <ul className="sub-list">
          <li className="list-item">Web Designing</li>
          <li className="list-item">Web Development</li>
          <li className="list-item">API's using Node.js</li>
          <li className="list-item">.NET/ASP.NET Web Development</li>
          <li className="list-item">MySQL and MongoDB</li>
          <li className="list-item">Machine Learning</li>
          <li className="list-item">Artificial Intelligence</li>
          <li className="list-item">Programming</li>
          <li className="list-item">Data Visualization</li>
          <li className="list-item">Chip Designing</li>
          <li className="list-item">Satelite Designing</li>
      </ul>
    </Layout>
  );
}
