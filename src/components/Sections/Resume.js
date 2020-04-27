import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import ResumeToggle from "./SectionToggles/ResumeToggle";

const Resume = ({ index, phonePortraitView, changeIndex, sectionData }) => {
  const resumeSpring = useSpring({
    width: index === null ? "20vw" : index === "resume" ? "80vw" : "5vw",
    from: {
      width: "20vw",
    },
  });

  const resumeSpringMobile = useSpring({
    height: index === null ? "20vh" : index === "resume" ? "80vh" : "5vh",
    from: {
      height: "20vh",
    },
  });

  const handleClick = () => {
    changeIndex("resume");
  };

  return (
    <animated.section
      className={`${sectionData.name}-section`}
      style={!phonePortraitView ? resumeSpring : resumeSpringMobile}
    >
      <Link
        className={`title-text ${sectionData.name}-title`}
        to={`/${sectionData.name}`}
        onClick={handleClick}
      >
        <p>{sectionData.text}</p>
      </Link>
      <Route path={`/${sectionData.name}`} component={ResumeToggle} />
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

export default Resume;
