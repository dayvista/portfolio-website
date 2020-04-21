import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/css/App.css";
import "../styles/css/Sections/Titles.css";

import Projects from "./Sections/Projects";
import Resume from "./Sections/Resume";
import Social from "./Sections/Social";
import About from "./Sections/About";

const App = () => {
  return (
    <Router>
      <div className="display">
        <section className="projects-section">
          <div className="title-text projects-title">
            <p>Projects</p>
          </div>
          <Switch>
            <Route path="/projects" component={Projects} />
          </Switch>
          <a
            id="projects-icon"
            href="https://github.com/dayvista"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../images/svg/github.svg"></img>
          </a>
          <Link id="back-arrow-icon" to="">
            <img src="../images/svg/back-arrow.svg"></img>
          </Link>
        </section>
        <section className="resume-section">
          <div className="title-text resume-title">
            <p>Resume</p>
          </div>
          <Switch>
            <Route path="/resume" component={Resume} />
          </Switch>
          <a
            id="resume-icon"
            href="https://linkedin.com/in/wjdiii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../images/svg/linkedin.svg"></img>
          </a>
        </section>
        <section className="social-section">
          <div className="title-text social-title">
            <p>Social</p>
          </div>
          <Switch>
            <Route path="/social" component={Social} />
          </Switch>
          <a
            id="social-icon"
            href="https://twitter.com/dayvista_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../images/svg/twitter.svg"></img>
          </a>
        </section>
        <section className="about-section">
          <div className="title-text about-title">
            <p>About</p>
          </div>
          <Switch>
            <Route path="/about" component={About} />
          </Switch>
          <a
            id="projects-icon"
            href="mailto:liam@dayvista.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="../images/svg/email.svg"></img>
          </a>
        </section>
        <section className="titles-section">
          <div className="title-text titles-title">
            <p>William Davis</p>
          </div>
          <div id="titles-logo">
            <img src="../images/svg/sunrise.svg"></img>
          </div>
          <div className="title-text titles-title">
            <p>Web Developer</p>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default App;
