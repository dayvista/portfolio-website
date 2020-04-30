import React from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../../Icon/IconIndex";

const AnimatedIcon = animated(Icon);

import "../../../styles/css/Sections/About.css";

const AboutToggle = ({ index, sectionData, mobileViewportPortrait }) => {
  const toggled = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    width: index === `${sectionData.name}` ? "100%" : "0%",
    height: index === `${sectionData.name}` ? "100%" : "0%",
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
    },
  });

  const toggledMobile = useSpring({});

  return (
    <animated.div style={toggled}>
      <AnimatedIcon name="selfie" />
    </animated.div>
  );
};

export default AboutToggle;
