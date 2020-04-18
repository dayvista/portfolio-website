import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/css/App.css";

import Projects from "./Sections/Projects";
import Resume from "./Sections/Resume";
import Social from "./Sections/Social";
import About from "./Sections/About";

import Icon from "./Icons/Icon";

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
          <div>{/* Icon with link goes here */}</div>
        </section>
        <section className="resume-section">
          <div className="title-text resume-title">
            <p>Resume</p>
          </div>
          <Switch>
            <Route path="/resume" component={Resume} />
          </Switch>
          <div>{/* Icon with link goes here */}</div>
        </section>
        <section className="social-section">
          <div className="title-text social-title">
            <p>Social</p>
          </div>
          <Switch>
            <Route path="/social" component={Social} />
          </Switch>
          <div>{/* Icon with link goes here */}</div>
        </section>
        <section className="about-section">
          <div className="title-text about-title">
            <p>About</p>
          </div>
          <Switch>
            <Route path="/about" component={About} />
          </Switch>
          <div>{/* Icon with link goes here */}</div>
        </section>
        <section className="titles-section">
          <div className="title-text titles-title">
            <p>William Davis</p>
          </div>
          <div>{/* Logo goes here */}</div>
          <div className="title-text titles-title">
            <p>Web Developer</p>
          </div>
          <Link to="">
            <Icon name="back-arrow" />
          </Link>
        </section>
      </div>
    </Router>
  );
};

export default App;
