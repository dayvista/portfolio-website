import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/css/App.css";
import "../styles/css/Sections/Titles.css";

import Projects from "./Sections/Projects";
import Resume from "./Sections/Resume";
import Social from "./Sections/Social";
import About from "./Sections/About";

import sectionData from "./Sections/data/section-data";

import Icon from "./Icon/IconIndex";

const App = () => {
  const [index, setIndex] = useState(null);

  const handleClick = (event) => {
    let selectedId = "";

    if (event.target.parentElement.id) {
      selectedId = event.target.parentElement.id;
    } else if (event.target.parentElement.parentElement.id) {
      selectedId = event.target.parentElement.parentElement.id;
    }

    for (let i = 0; i < sectionData.length; i++) {
      if (i === parseInt(selectedId)) {
        document.getElementById(selectedId).style["width"] = "80vw";
      } else {
        document.getElementById(i.toString()).style["width"] = "5vw";
      }
    }
  };

  return (
    <Router>
      <div className="container">
        {sectionData.map((props, i) => (
          <section
            key={i}
            id={i}
            className={`${props.name}-section`}
            style={props.width}
          >
            {/* Ternary operator used to place Links and component Routes */}
            {props.name !== "titles" ? (
              <Fragment>
                <Link
                  className={`title-text ${props.name}-title`}
                  to={`/${props.name}`}
                  onClick={handleClick}
                >
                  <p>{props.text}</p>
                </Link>
                <Switch>
                  <Route
                    path={`/${props.name}`}
                    component={componentName(props.name)}
                  />
                </Switch>
              </Fragment>
            ) : (
              <div className="title-text titles-title">
                <p>William Davis</p>
              </div>
            )}
            {/* Ternary to insert icons/logo */}
            {props.name !== "titles" ? (
              <a
                id={`${props.name}-icon`}
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={props.icon} />
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
            {props.backarrow ? (
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

const componentName = (section) => {
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
