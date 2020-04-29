import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import ProjectsToggle from "./SectionToggles/ProjectsToggle";

const Projects = ({
  index,
  mobileViewportPortrait,
  changeIndex,
  sectionData,
}) => {
  const sectionSpring = useSpring({
    width:
      index === null ? "20%" : index === `${sectionData.name}` ? "80%" : "5%",
    from: {
      width: "20%",
    },
  });

  const sectionMobileSpring = useSpring({
    height:
      index === null ? "20%" : index === `${sectionData.name}` ? "80%" : "5%",
    from: {
      height: "20%",
    },
  });

  const textSpring = useSpring({
    opacity: (index === null) | (index === `${sectionData.name}`) ? 1 : 0,
    from: {
      opacity: 1,
    },
  });

  const iconSpring = useSpring({
    width: index === null ? "5vw" : "0vw",
    opacity: index === null ? 1 : 0,
    pointerEvents: index === null ? "auto" : "none",

    from: {
      width: "5vw",
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
        style={!mobileViewportPortrait ? sectionSpring : sectionMobileSpring}
      >
        <Link
          className={`title-text main-text ${sectionData.name}-title`}
          to={`/${sectionData.name}`}
          onClick={handleClick}
          style={
            index === `${sectionData.name}`
              ? {
                  cursor: "default",
                  MozBoxShadow: "none",
                  WebkitBoxShadow: "none",
                  boxShadow: "none",
                }
              : { cursor: "pointer" }
          }
        >
          <animated.p style={textSpring}>{sectionData.text}</animated.p>
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
      </animated.section>
    </Router>
  );
};

export default Projects;
