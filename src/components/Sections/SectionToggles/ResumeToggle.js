import React from "react";
import { animated, useSpring } from "react-spring";
import { Document, Page } from "react-pdf";

const AnimatedDocument = animated(Document);
const AnimatedPage = animated(Page);

import resume from "../../../img/resume/resume.pdf";
import letterOfRec from "../../../img/resume/lor.pdf";

import "../../../styles/css/Sections/Resume.css";

const ResumeToggle = ({ index, sectionData, mVP, tVP }) => {
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
              cursor: index === `${sectionData.name}` ? "default" : "pointer",
            },
          ]
        : [
            {
              opacity: index === `${sectionData.name}` ? 1 : 0,
              width: index === `${sectionData.name}` ? "100%" : "0%",
              height: index === `${sectionData.name}` ? "100%" : "0%",
            },
            {
              cursor: index === `${sectionData.name}` ? "default" : "pointer",
            },
          ],
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
      cursor: "pointer",
    },
  });

  const documentSpring = useSpring({
    width: index === `${sectionData.name}` ? "100vw" : "0vw",
    // height: index === `${sectionData.name}` ? "100%" : "0%",
    opacity: index === `${sectionData.name}` ? 1 : 0,
    from: {
      opacity: index === `${sectionData.name}` ? 1 : 0,
      width: index === `${sectionData.name}` ? "100vw" : "0vw",
      // height: "0%",
    },
  });

  return (
    <animated.div
      className="container"
      style={{ width, height, opacity, cursor, ...toggledSection }}
    >
      <AnimatedDocument
        id="resume-document"
        style={documentSpring}
        file={resume}
      >
        <AnimatedPage id="resume-pages" pageNumber={1} />
      </AnimatedDocument>
      <AnimatedDocument
        id="lor-document"
        style={documentSpring}
        file={letterOfRec}
      >
        <AnimatedPage id="lor-pages" pageNumber={1} />
      </AnimatedDocument>
    </animated.div>
  );
};

export default ResumeToggle;
