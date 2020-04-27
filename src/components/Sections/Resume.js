import React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import ResumeToggle from "./SectionToggles/ResumeToggle";

const Resume = ({ index, phonePortraitView, changeIndex, sectionData }) => {
  const { width, opacity, justifyContent, ...resumeSpringProps } = useSpring({
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

  const { height, ...resumeSpringMobileProps } = useSpring({
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
    changeIndex("resume");
  };

  return (
    <animated.section
      className={`main-section ${sectionData.name}-section`}
      style={
        !phonePortraitView
          ? { width, ...resumeSpringProps }
          : { height, ...resumeSpringMobileProps }
      }
    >
      <Link
        className={`title-text main-text ${sectionData.name}-title`}
        to={`/${sectionData.name}`}
        onClick={handleClick}
      >
        <animated.p style={{ opacity, ...resumeSpringProps }}>
          {sectionData.text}
        </animated.p>
      </Link>
      {index === `${sectionData.name}` && <ResumeToggle />}
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
        <Icon name="back-arrow" stroke="#ddd6e5" />
      </Link>
    </animated.section>
  );
};

export default Resume;
