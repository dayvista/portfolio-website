import React from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import AboutToggle from "./SectionToggles/AboutToggle";

const About = ({ index, phonePortraitView, changeIndex, sectionData }) => {
  const { width, opacity, ...aboutSpringProps } = useSpring({
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

  const { height, ...aboutSpringMobileProps } = useSpring({
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
    changeIndex("about");
  };

  return (
    <animated.section
      className={`main-section ${sectionData.name}-section`}
      style={
        !phonePortraitView
          ? { width, ...aboutSpringProps }
          : { height, ...aboutSpringMobileProps }
      }
    >
      <Link
        className={`title-text main-text ${sectionData.name}-title`}
        to="/about"
        onClick={handleClick}
      >
        <animated.p style={{ opacity, ...aboutSpringProps }}>
          {sectionData.text}
        </animated.p>
      </Link>
      <a
        id={`${sectionData.name}-icon`}
        href={`${sectionData.link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name={`${sectionData.icon}`} />
      </a>
      <AboutToggle index={index} sectionData={sectionData} />
      <Link
        id={`back-arrow-${sectionData.name}`}
        className="back-arrow-icon"
        to=""
        onClick={handleClick}
      >
        <Icon name="back-arrow" stroke="#fef7f3" />
      </Link>
    </animated.section>
  );
};

export default About;
