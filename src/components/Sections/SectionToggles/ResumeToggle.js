import React, { useState } from "react";
import { animated } from "react-spring";
import { Document, Page } from "react-pdf";

const AnimatedDocument = animated(Document);
const AnimatedPage = animated(Page);

import "../../../styles/css/Sections/Resume.css";

const ResumeToggle = (props) => {
  return (
    <animated.div>
      <animated.object src="../../../img/resume/resume.pdf" />
      <animated.object src="../../../img/resume/lor.pdf" />
    </animated.div>
  );
};

export default ResumeToggle;
