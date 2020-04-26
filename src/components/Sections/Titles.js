import React from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

const Titles = ({ index, phonePortraitView, changeIndex }) => {
  const titlesSpring = useSpring({
    width: index === null ? "20vw" : index === "titles" ? "80vw" : "5vw",
    from: {
      width: "20vw",
      height: "100vh",
    },
  });

  const titlesSpringMobile = useSpring({
    height: index === null ? "20vh" : index === "titles" ? "80vh" : "5vh",
    from: {
      width: "100vw",
      height: "20vh",
    },
  });

  const handleClick = () => {
    changeIndex("social");
  };

  return (
    <animated.section
      className="titles-section"
      style={!phonePortraitView ? titlesSpring : titlesSpringMobile}
    >
      <div className="title-text titles-title">
        <p>William Davis</p>
      </div>
      <div id="titles-logo">
        <Icon name="sunrise" />
      </div>
      <div className="title-text titles-title">
        <p>Web Developer</p>
      </div>
    </animated.section>
  );
};

export default Titles;
