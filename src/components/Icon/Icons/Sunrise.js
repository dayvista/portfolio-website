// All emojis designed by OpenMoji – the open-source emoji and icon project. License: CC BY-SA 4.0

import React from "react";
import { animated, useSpring } from "react-spring";

const Sunrise = ({ index, stroke = "#492b05" }) => {
  const titlesLogoSpring = useSpring({
    width: index === null ? "15vw" : "0vw",
    opacity: index !== null ? 0 : 1,
    from: {
      width: "15vw",
      opacity: 1,
    },
  });

  return (
    <animated.svg
      id="sunrise-svg"
      style={titlesLogoSpring}
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="line">
        <path
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M25.75,37.0488a15.0248,15.0248,0,0,1,14.7118-3.3742,15.3622,15.3622,0,0,1,7.5867,5.3881,11.5175,11.5175,0,0,1,1.6933,2.88"
        />
        <polyline
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          points="5 42.416 16.34 32.855 54.746 67"
        />
        <line
          x1="42.9832"
          x2="66.7554"
          y1="53.4452"
          y2="28.2196"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </g>
    </animated.svg>
  );
};

export default Sunrise;
