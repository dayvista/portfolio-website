import React, { useEffect } from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../../Icon/IconIndex";

import "../../../styles/css/Sections/About.css";

const AboutToggle = ({ index, sectionData }) => {
  useEffect(() => {}, []);

  const toggled = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    width: index === `${sectionData.name}` ? "50%" : "0%",
    height: index === `${sectionData.name}` ? "50%" : "0%",
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
    },
  });

  return (
    <animated.div style={toggled}>
      <Icon name="selfie" />
    </animated.div>
  );
};

export default AboutToggle;
