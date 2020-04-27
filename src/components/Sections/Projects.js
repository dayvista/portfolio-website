import React from "react";
import { Link } from "react-router-dom";
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

  const handleClick = () => {
    changeIndex("projects");
  };

  return (
    <animated.section
      className={`${sectionData.name}-section`}
      style={
        !phonePortraitView
          ? { width, ...projectsSpringProps }
          : { height, ...projectsSpringMobileProps }
      }
    >
      <Link
        className={`title-text ${sectionData.name}-title`}
        to={`/${sectionData.name}`}
        onClick={handleClick}
      >
        <animated.p style={{ opacity, ...projectsSpringProps }}>
          {sectionData.text}
        </animated.p>
      </Link>
      {index === `${sectionData.name}` && <ProjectsToggle />}
      <a
        id={`${sectionData.name}-icon`}
        href={`${sectionData.link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name={`${sectionData.icon}`} />
      </a>
      <Link
        id={`back-arrow-${sectionData.name}`}
        className="back-arrow-icon"
        to=""
        onClick={handleClick}
      >
        <Icon name="back-arrow" />
      </Link>
    </animated.section>
  );
};

export default Projects;
