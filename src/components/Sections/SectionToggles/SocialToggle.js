import React from "react";
import { animated, useSpring } from "react-spring";

import "../../../styles/css/Sections/Social.css";

const SocialToggle = ({ index, sectionData, mVP, tVP }) => {
  const { width, height, opacity, cursor, ...toggledSection } = useSpring({
    to:
      index === `${sectionData.name}`
        ? [
            {
              width: index === `${sectionData.name}` ? "100%" : "0%",
              height: index === `${sectionData.name}` ? "100%" : "0%",
            },
            {
              opacity: index === `${sectionData.name}` ? 1 : 0,
            },
          ]
        : [
            {
              opacity: index === `${sectionData.name}` ? 1 : 0,
              width: index === `${sectionData.name}` ? "100%" : "0%",
              height: index === `${sectionData.name}` ? "100%" : "0%",
            },
          ],
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
    },
  });

  return (
    <animated.div
      id="social-container"
      style={{ width, height, opacity, ...toggledSection }}
    ></animated.div>
  );
};

export default SocialToggle;
