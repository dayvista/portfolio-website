import React from "react";

import "../styles/css/App.css";

import Projects from "./Sections/Projects";
import Resume from "./Sections/Resume";
import Social from "./Sections/Social";
import About from "./Sections/About";

const App = () => {
  return (
    <div className="display">
      <section className="projects-section">
        <div className="title-text projects-title">
          <p>Projects</p>
        </div>
        <Projects />
        <div>{/* Icon with link goes here */}</div>
      </section>
      <section className="resume-section">
        <div className="title-text resume-title">
          <p>Resume</p>
        </div>
        <Resume />
        <div>{/* Icon with link goes here */}</div>
      </section>
      <section className="social-section">
        <div className="title-text social-title">
          <p>Social</p>
        </div>
        <Social />
        <div>{/* Icon with link goes here */}</div>
      </section>
      <section className="about-section">
        <div className="title-text about-title">
          <p>About</p>
        </div>
        <About />
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
        <div>{/* Back arrow goes here */}</div>
      </section>
    </div>
  );
};

export default App;
