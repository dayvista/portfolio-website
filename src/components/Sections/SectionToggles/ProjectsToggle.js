import React, { useState } from "react";
import { animated, useSpring, useSprings } from "react-spring";

import Icon from "../../Icon/IconIndex";

import "../../../styles/css/Sections/Projects.css";

const AnimatedIcon = animated(Icon);

const stroke = "#ddd6e5";

const projects = [
  "https://source.unsplash.com/750x500/?earth",
  "https://source.unsplash.com/750x500/?wind",
  "https://source.unsplash.com/750x500/?fire",
  "https://source.unsplash.com/750x500/?water",
];

const ProjectsToggle = ({ index, sectionData, mVP, tVP }) => {
  const [carouselIndex, setCarouselIndex] = useState("project1");

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

  return (
    <animated.div id="projects-container" style={toggled}>
      <animated.div className="carousel-container">
        <AnimatedIcon name="back-arrow" stroke={stroke} />
        <animated.div className="carousel-slider">
          {/* <animated.img
            src="https://source.unsplash.com/750x500/?fire"
            id="lastClone"
          ></animated.img>
          <animated.img src="https://source.unsplash.com/750x500/?nature"></animated.img>
          <animated.img src="https://source.unsplash.com/750x500/?water"></animated.img>
          <animated.img src="https://source.unsplash.com/750x500/?trees"></animated.img>
          <animated.img src="https://source.unsplash.com/750x500/?sky"></animated.img>
          <animated.img
            src="https://source.unsplash.com/750x500/?earth"
            id="firstClone"
          ></animated.img> */}
        </animated.div>
        <AnimatedIcon name="next-arrow" stroke={stroke} />
      </animated.div>
    </animated.div>
  );
};

export default ProjectsToggle;
