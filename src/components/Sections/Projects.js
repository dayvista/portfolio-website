import React, { useEffect } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import "../../styles/css/Sections/Projects.css";

const Projects = ({ index, mql, changeIndex }) => {
  let mediaQueryListener = window.matchMedia("(max-width: 500px)");

  useEffect(() => {
    const mediaQueryResponse = (mql) => {
      if (mql.matches) {
        setPhonePortraitView(true);
      } else {
        setPhonePortraitView(false);
      }
    };

    mediaQueryResponse(mediaQueryListener);
    mediaQueryListener.addListener(mediaQueryResponse);

    return () => {
      mediaQueryListener.removeListener(mediaQueryResponse);
    };
  }, []);

  const projectsSpring = useSpring({
    width: index === null ? "20vw" : index === "projects" ? "80vw" : "5vw",
    from: {
      width: "20vw",
      height: "100vh",
    },
  });

  const projectsSpringMobile = useSpring({
    height: index === null ? "20vh" : index === "projects" ? "80vh" : "5vh",
    from: {
      width: "100vw",
      height: "20vh",
    },
  });

  const handleClick = () => {
    changeIndex("projects");
  };

  return (
    <animated.section
      className="projects-section"
      style={
        !mediaQueryListener.matches ? projectsSpring : projectsSpringMobile
      }
    >
      <Link
        className="title-text projects-title"
        to="/projects"
        onClick={handleClick}
      >
        <p>Projects</p>
      </Link>
      <Switch>
        <Route path="/projects" component={Projects} />
      </Switch>
      <a
        id="projects-icon"
        href="https://github.com/dayvista"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" />
      </a>
      <Link id="back-arrow-icon" to="">
        <Icon name="back-arrow" />
      </Link>
    </animated.section>
  );
};

export default Projects;
