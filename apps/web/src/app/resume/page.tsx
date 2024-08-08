import React from "react";
import Download from "@mui/icons-material/Download";

export default function Resume() {
  return (
    <section className="flex flex-col gap-5 container p-3 font-['Inter'] bg-white text-black mx-auto px-3 md:mt-0 mt-12">
      <div className="flex gap-10 text-center justify-center items-center">
        <h1 className="text-4xl font-bold text-center my-4">Mahesh Muttinti</h1>
        <a
          href="https://drive.google.com/uc?id=1OXFsOMK9Fxi6E8F83STds6sgQnWhYBWC&export=download"
          className="hover:text-blue-600"
          title="Download Mahesh Muttinti Resume"
        >
          <Download />
        </a>
      </div>
      <h2 className="text-2xl font-semibold text-center mb-8">
        Full Stack Web & Mobile App Developer
      </h2>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">About Me</h3>
        <p className="text-justify">
          I have an ambitious personality and thrive on challenges. While
          setting new goals for myself, I aim for results that will make me more
          productive and effective in my environment. I am not comfortable with
          settling for something I’m not comfortable with, thus looking for
          opportunities where I can get to perform better. I enjoy interacting
          with people and sharing my skills and also learning from them.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Work Experience</h3>

        <div className="mb-6">
          <h4 className="text-lg font-semibold">
            OHM E Logistics Private Limited
          </h4>
          <p>Hyderabad</p>
          <p>Designation: Senior Software Engineer</p>
          <p>Year of Experience: 2023 August - 2024 May, 9 Months</p>
          <p>Projects Contributed & Brief Summary:</p>
          <ul className="list-disc ml-5">
            <li className="mb-2">
              <strong>OHM Dispatcher App</strong>
              <ul className="list-disc ml-5">
                <li>
                  Worked as an Android and iOS Mobile Application developer
                  using React Native.
                </li>
                <li>
                  Integrated APIs including push notifications, sockets, and
                  geo-location services.
                </li>
                <li>
                  Published the application to the Play Store and App Store.
                </li>
              </ul>
            </li>
            <li>
              <strong>OHM User App</strong>
              <ul className="list-disc ml-5">
                <li>
                  Worked as an Android and iOS Mobile Application developer
                  using React Native.
                </li>
                <li>
                  Integrated APIs including push notifications, sockets, and
                  geo-location services.
                </li>
                <li>
                  Published the application to the Play Store and App Store.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold">
            Betalectic IT Projects Limited
          </h4>
          <p>Hyderabad</p>
          <p>Year of Experience: 2021 July - 2023 August, 2 years 1 month</p>
          <p>Designation: Full Stack Developer</p>
          <p>Projects Contributed & Brief Summary:</p>
          <ul className="list-disc ml-5">
            <li className="mb-2">
              <strong>Nemo</strong>
              <ul className="list-disc ml-5">
                <li>
                  Worked as an Android Mobile Application UI developer using
                  React Native.
                </li>
                <li>
                  Integrated APIs in Dashboard, Banking, Business, and Profiles
                  modules.
                </li>
                <li>
                  Worked as a Node Js backend API developer and implemented a
                  few APIs.
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <strong>WiredUp</strong>
              <ul className="list-disc ml-5">
                <li>
                  Worked as an Android & iOS Mobile Application UI developer
                  using React Native.
                </li>
                <li>
                  Integrated APIs in Seek & Hire, Learn & Earn, Sell & Source
                  modules.
                </li>
                <li>
                  Worked as a Node Js backend API developer and implemented a
                  few APIs.
                </li>
              </ul>
            </li>
            <li>
              <strong>FinEzzy</strong>
              <ul className="list-disc ml-5">
                <li>
                  Worked as an Android & iOS Mobile Application UI developer
                  using React Native.
                </li>
                <li>
                  Integrated APIs in various modules and third-party APIs.
                </li>
                <li>
                  Worked as a Node Js backend API developer and implemented a
                  few APIs.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Professional Summary</h3>
        <h4 className="text-lg font-semibold mb-1">Core Competencies</h4>
        <ul className="list-disc ml-5 mb-4">
          <li>Communication and problem-solving skills</li>
          <li>Curiosity to learn</li>
          <li>Patience and time management</li>
          <li>Focusing on the impact of my work</li>
          <li>Working in line with business goals</li>
          <li>Working effectively under minimal supervision</li>
        </ul>
        <h4 className="text-lg font-semibold mb-1">
          Areas of Expertise / Skills
        </h4>
        <ul className="list-disc ml-5">
          <li>Languages: JavaScript (ES6), HTML5, CSS3, Typescript, Python</li>
          <li>
            Front-end: React JS, Next JS, Tailwind CSS (Web), React Native
            (Mobile)
          </li>
          <li>Back-end: Node JS, Express, KnexJs</li>
          <li>APIs: REST</li>
          <li>Dev-Ops: AWS RDS, AWS EC2, AWS ECS</li>
          <li>Databases: PostgreSQL, Mongo, Firebase</li>
          <li>
            Tools: Git, GitHub, Visual Studio Code, Linux, Windows, Android
            Studio, XCode, Postman, Browser tools, Jest, Webpack, Babel
          </li>
          <li>Deployment-Platforms: Netlify, Heroku, Vercel</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Professional Training</h3>
        <p>Full Stack Development – MERN Stack at Digital-Lync, Hyderabad</p>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Achievements</h3>
        <ul className="list-disc ml-5">
          <li>Team lead of a developer community</li>
          <li>Built a portfolio using React JS and HTML/CSS</li>
          <li>Implemented a simple Python GUI music player</li>
          <li>Contributed to open-source projects</li>
          <li>Writing technical articles</li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">Projects</h3>
        <h4 className="text-lg font-semibold">Freelance Projects</h4>
        <ul className="list-disc ml-5 mb-4">
          <li>
            <strong>Machine code technologies</strong>
            <ul className="list-disc ml-5">
              <li>Worked as a front-end UI developer</li>
              <li>Deployed the website on Netlify</li>
            </ul>
          </li>
        </ul>
        <h4 className="text-lg font-semibold">Personal Projects</h4>
        <ul className="list-disc ml-5">
          <li>
            <strong>TelNewz</strong>
            <ul className="list-disc ml-5">
              <li>Static Website using Next JS (deployed on Vercel)</li>
            </ul>
          </li>
          <li>
            <strong>Ticaret</strong>
            <ul className="list-disc ml-5">
              <li>Implemented static screens and Google Authentication</li>
            </ul>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl font-semibold mb-2">
          Developer & Social Links
        </h3>
        <ul className="list-disc ml-5">
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/maheshmuttintidev"
              className="text-blue-500 hover:underline"
            >
              maheshmuttintidev
            </a>
          </li>
          <li>
            Stack-Overflow:{" "}
            <a
              href="https://stackoverflow.com/users/15017210/mahesh-muttinti"
              className="text-blue-500 hover:underline"
            >
              Mahesh Muttinti
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/mahesh-muttinti-4a2b61202/"
              className="text-blue-500 hover:underline"
            >
              Mahesh Muttinti
            </a>
          </li>
          <li>
            X:{" "}
            <a
              href="https://x.com/MaheshMuttinti"
              className="text-blue-500 hover:underline"
            >
              MaheshMuttinti
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-2">Education</h3>
        <h4 className="text-lg font-semibold">Degree</h4>
        <p>College Name: G.I.E.T College of Engineering, Rajahmundry</p>
        <p>
          Specialization: Bachelor of Technology in Electronics and
          Communication Engineering
        </p>
        <p>GPA: 63.25</p>
        <p>Year of Graduation: 2017 – 2020</p>

        <h4 className="text-lg font-semibold">Diploma</h4>
        <p>College Name: E.S.C. Government Polytechnic College, Nandyal</p>
        <p>Specialization: Electronics and Communication Engineering</p>
        <p>GPA: 85.25</p>
        <p>Year of Graduation: 2014-2017</p>

        <h4 className="text-lg font-semibold">SSC</h4>
        <p>School Name: S.H.K.Z.P High School, Hukumpeta</p>
        <p>GPA: 9.2</p>
        <p>Year of Graduation: 2014</p>
      </section>
    </section>
  );
}
