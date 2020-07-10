import React from "react";
import { animated, useSpring } from "react-spring";

import "../../../styles/css/Sections/Resume.css";

const ResumeToggle = ({ index, sectionData, mVP, tVP }) => {
  const toggledSection = useSpring({
    to:
      index === `${sectionData.name}`
        ? [
            {
              width: index === `${sectionData.name}` ? "100%" : "0%",
              height: index === `${sectionData.name}` ? "100%" : "0%",
              marginRight:
                (index === `${sectionData.name}`) & !mVP & !tVP
                  ? "1.5vw"
                  : "0vw",
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
              marginRight:
                (index === `${sectionData.name}`) & !mVP & !tVP
                  ? "1.5vw"
                  : "0vw",
            },
          ],
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
      marginRight: "0vw",
    },
  });

  const resumeSpring = useSpring({
    width: index === `${sectionData.name}` ? "95%" : "0%",
    marginLeft: index === `${sectionData.name}` ? "2.25vw" : "0vw",
    marginBottom: index === `${sectionData.name}` ? "2.5vh" : "0vh",
    from: {
      width: index === `${sectionData.name}` ? "95%" : "0%",
      marginLeft: index === `${sectionData.name}` ? "2.25vw" : "0vw",
      marginBottom: index === `${sectionData.name}` ? "2.5vh" : "0vh",
    },
  });

  const lorSpring = useSpring({
    width: index === `${sectionData.name}` ? "95%" : "0%",
    marginLeft: index === `${sectionData.name}` ? "2.25vw" : "0vw",
    from: {
      width: index === `${sectionData.name}` ? "95%" : "0%",
      marginLeft: index === `${sectionData.name}` ? "2.25vw" : "0vw",
    },
  });

  return (
    <animated.div id="resume-container" style={toggledSection}>
      <animated.img
        src="https://i.postimg.cc/4yZ6JXWn/resume.png"
        style={resumeSpring}
      ></animated.img>
      <animated.img
        src="https://i.postimg.cc/mByVwKcn/lor.png"
        style={lorSpring}
      ></animated.img>
    </animated.div>
  );
};

export default ResumeToggle;
