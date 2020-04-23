import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { animated, useSpring, useSprings } from "react-spring";

import "../styles/css/App.css";
import "../styles/css/Sections/Titles.css";

import Projects from "./Sections/Projects";
import Resume from "./Sections/Resume";
import Social from "./Sections/Social";
import About from "./Sections/About";

import sectionData from "./Sections/data/section-data";

import Icon from "./Icon/IconIndex";

// Refer to https://codesandbox.io/s/react-spring-usesprings-u7rsl?file=/src/pages/index.js
// and https://medium.com/better-programming/create-animated-apps-with-react-spring-e3af98ab014f

const App = () => {
  const [index, setIndex] = useState(null);

  const springs = useSprings(
    sectionData.length,
    sectionData.map((section, i) => ({
      width: index === null ? "20vw" : index === i ? "80vw" : "5vw",
    }))
  );

  // const [springProps, setSpringProps] = useSpring();

  const onSectionClick = (event, i) => {};

  return (
    <Router>
      <div className="container">
        {sectionData.map((section, i) => (
          // springs.map(() => {})
          <section key={i} id={i} className={`${section.name}-section`}>
            {/* Ternary operator used to place Links and component Routes */}
            {section.name !== "titles" ? (
              <Fragment>
                <Link
                  className={`title-text ${section.name}-title`}
                  to={`/${section.name}`}
                  onClick={() => {
                    setIndex(i);
                    onSectionClick(event, i);
                  }}
                >
                  <p>{section.text}</p>
                </Link>
                <Switch>
                  <Route
                    path={`/${section.name}`}
                    component={importComponent(section.name)}
                  />
                </Switch>
              </Fragment>
            ) : (
              <div className="title-text titles-title">
                <p>William Davis</p>
              </div>
            )}
            {/* Ternary to insert icons/logo */}
            {section.name !== "titles" ? (
              <a
                id={`${section.name}-icon`}
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={section.icon} />
              </a>
            ) : (
              <Fragment>
                <div id="titles-logo">
                  <Icon name="sunrise" />
                </div>
                <div className="title-text titles-title">
                  <p>Web Developer</p>
                </div>
              </Fragment>
            )}
            {/* Ternary used to place back-arrow SVG icon into projects section */}
            {section.backarrow ? (
              <Link id="back-arrow-icon" to="">
                <Icon name="back-arrow" />
              </Link>
            ) : (
              <Fragment />
            )}
          </section>
        ))}
      </div>
    </Router>
  );
};

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

export default App;
