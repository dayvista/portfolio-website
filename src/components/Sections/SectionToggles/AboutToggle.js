import React from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../../Icon/IconIndex";

import "../../../styles/css/Sections/About.css";

const AboutToggle = ({ index, sectionData, phonePortraitView }) => {
  const toggled = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    width: index === `${sectionData.name}` ? "77.5vw" : "0vw",
    height: index === `${sectionData.name}` ? "80vh" : "0vh",
    from: {
      opacity: 0,
      width: "0vw",
      height: "0vh",
    },
  });

  const toggledMobile = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    width: index === `${sectionData.name}` ? "77.5vw" : "0vw",
    height: index === `${sectionData.name}` ? "80vh" : "0vh",
    from: {
      opacity: 0,
      width: "0vw",
      height: "0vh",
    },
  });

  return (
    <animated.div
      className="about-toggle"
      style={!phonePortraitView ? toggled : toggledMobile}
    >
      <Icon name="selfie" fill="#602606" />
    </animated.div>
  );
};

export default AboutToggle;
