import React from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

const Titles = ({ index, phonePortraitView, changeIndex, sectionData }) => {
  const { width, opacity, ...titlesSpringProps } = useSpring({
    width: index === null ? "20vw" : "5vw",
    opacity: index === null ? 1 : 0,
    from: {
      width: "20vw",
      opacity: 1,
    },
  });

  const { height, ...titlesSpringMobileProps } = useSpring({
    height: index === null ? "20vh" : "5vh",
    from: {
      height: "20vh",
    },
  });

  return (
    <animated.section
      className="titles-section"
      style={
        !phonePortraitView
          ? { width, ...titlesSpringProps }
          : { height, ...titlesSpringMobileProps }
      }
    >
      <animated.div
        className="title-text titles-title"
        style={{ opacity, ...titlesSpringProps }}
      >
        <animated.p style={{ opacity, ...titlesSpringProps }}>
          William Davis
        </animated.p>
      </animated.div>
      <div id="titles-logo">
        <Icon name="sunrise" index={index} />
      </div>
      <animated.div
        className="title-text titles-title"
        style={{ opacity, ...titlesSpringProps }}
      >
        <animated.p style={{ opacity, ...titlesSpringProps }}>
          Web Developer
        </animated.p>
      </animated.div>
    </animated.section>
  );
};

export default Titles;
