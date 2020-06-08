import React from "react";
import { animated, useSpring } from "react-spring";

import "../../../styles/css/Sections/Resume.css";

const ResumeToggle = (props) => {
  return (
    <animated.div>
      <animated.iframe
        src=""
        frameBorder="0"
        scrolling="auto"
        height="100%"
        width="100%"
      ></animated.iframe>
    </animated.div>
  );
};

export default ResumeToggle;
