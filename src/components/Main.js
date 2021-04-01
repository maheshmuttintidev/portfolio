import avatar from "../assets/avatar.jpg"
import Layout from './Layout'

export default function Main() {
  return (
    <Layout>
      <main>
        <div className="hero-container">
          <img src={avatar} alt="my-image" className="hero-image" />
          <div className="hero-content">
            <h1 className="under-mark">
              About Me
            </h1>
            <div className="hero-description-container">
              <span className="normal-size">My Name is Mahesh Muttinti.I am an Indian.I like to develop the websites as well as designing.I Choose these for <span className="under-mark">freelancing</span></span>
              <ol className="main-list">
                <li>
                  <span>Web Designing</span>
                  <ul className="sub-list">
                    <li>HTML / HTML5</li>
                    <li>CSS / CSS3</li>
                    <li>JavaScript</li>
                  </ul>
                </li>  
                <li>
                  <span>Web Development</span>
                  <ul className="sub-list">
                    <li>React.js</li>
                  </ul>
                </li>  
                <li>
                  <span>API's</span>
                  <ul className="sub-list">
                    <li>Node.js</li>
                    <li>Express JS</li>
                  </ul>
                </li>  
                <li>
                  <span>Database</span>
                  <ul className="sub-list">
                    <li>MongoDB</li>
                    <li>MySQL</li>
                  </ul>
                </li>  
              </ol>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}