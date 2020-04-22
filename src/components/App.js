import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSprings, animated } from "react-spring";

import "../styles/css/App.css";
import "../styles/css/Sections/Titles.css";

import Projects from "./Sections/Projects";
import Resume from "./Sections/Resume";
import Social from "./Sections/Social";
import About from "./Sections/About";

import sectionData from "./Sections/data/sectionData.json";

import Icon from "./Icon/IconIndex";

const App = () => {
  const [index, setIndex] = useState(null);

  const importComponent = (section) => {
    if (section === "about") {
      return About;
    } else if (section === "social") {
      return Social;
    } else if (section === "resume") {
      return Resume;
    } else if (section === "projects") {
      return Projects;
    }
  };

  return (
    <Router>
      <div className="display">
        {sectionData.map((section) => (
          <section key={section.name} className={`${section.name}-section`}>
            <Link
              className={`title-text ${section.name}-title`}
              to={`/${section.name}`}
            >
              <p>{section.text}</p>
            </Link>
            <Switch>
              <Route
                path={`/${section.name}`}
                component={importComponent(section.name)}
              />
            </Switch>
            <a
              id={`${section.name}-icon`}
              href={section.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name={section.icon} />
            </a>
            {/* Ternary operator used to inject back-arrow SVG icon into projects section */}
            {section.backarrow ? (
              <Link id="back-arrow-icon" to="">
                <Icon name="back-arrow" />
              </Link>
            ) : (
              <div />
            )}
          </section>
        ))}
        <section className="titles-section">
          <div className="title-text titles-title">
            <p>William Davis</p>
          </div>
          <div id="titles-logo">
            <Icon name="sunrise" />
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
