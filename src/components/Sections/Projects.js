import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import ProjectsToggle from "./SectionToggles/ProjectsToggle";

const Projects = ({ index, phonePortraitView, changeIndex, sectionData }) => {
  const { width, opacity, ...projectsSpringProps } = useSpring({
    width:
      index === null
        ? "20vw"
        : index === `${sectionData.name}`
        ? "80vw"
        : "5vw",
    opacity: (index === null) | (index === `${sectionData.name}`) ? 1 : 0,
    from: {
      width: "20vw",
      opacity: 1,
    },
  });

  const { height, ...projectsSpringMobileProps } = useSpring({
    height:
      index === null
        ? "20vh"
        : index === `${sectionData.name}`
        ? "80vh"
        : "5vh",
    from: {
      height: "20vh",
    },
  });

  const iconSpring = useSpring({
    width: index === null ? "5vw" : "0vw",
    height: index === null ? "5vh" : "0vh",
    opacity: index === null ? 1 : 0,
    pointerEvents: index === null ? "auto" : "none",

    from: {
      width: "5vw",
      height: "5vh",
      opacity: 1,
      pointerEvents: "auto",
    },
  });

  const handleClick = () => {
    changeIndex("projects");
  };

  return (
    <Router>
      <animated.section
        className={`main-section ${sectionData.name}-section`}
        style={
          !phonePortraitView
            ? { width, ...projectsSpringProps }
            : { height, ...projectsSpringMobileProps }
        }
      >
        <Link
          className={`title-text main-text ${sectionData.name}-title`}
          to={`/${sectionData.name}`}
          onClick={handleClick}
        >
          <animated.p style={{ opacity, ...projectsSpringProps }}>
            {sectionData.text}
          </animated.p>
        </Link>
        <Switch>
          <Route
            exact
            path="/projects"
            render={(props) => (
              <ProjectsToggle
                {...props}
                index={index}
                sectionData={sectionData}
              />
            )}
          />
        </Switch>
        <animated.a
          id={`${sectionData.name}-icon`}
          href={`${sectionData.link}`}
          target="_blank"
          rel="noopener noreferrer"
          style={iconSpring}
        >
          <Icon name={`${sectionData.icon}`} id={`${sectionData.icon}-svg`} />
        </animated.a>
        <Link
          id={`back-arrow-${sectionData.name}`}
          className="back-arrow-icon"
          to=""
          onClick={handleClick}
        >
          <Icon name="back-arrow" stroke="#ddd6e5" />
        </Link>
      </animated.section>
    </Router>
  );
};

export default Projects;
