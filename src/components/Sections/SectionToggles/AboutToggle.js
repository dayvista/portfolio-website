import React, { Fragment } from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../../Icon/IconIndex";

import "../../../styles/css/Sections/About.css";

const AboutToggle = ({ index, sectionData }) => {
  const toggled = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    width: index === `${sectionData.name}` ? "95%" : "0%",
    from: {
      opacity: 0,
      width: "0%",
    },
  });

  return (
    <animated.div className="about-toggle" style={toggled}>
      <Icon name="selfie" fill="#602606" />
    </animated.div>
  );
};

export default AboutToggle;
