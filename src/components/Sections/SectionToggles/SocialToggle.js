import React from "react";
import { animated, useSpring } from "react-spring";
import { Timeline } from "react-twitter-widgets";

import "../../../styles/css/Sections/Social.css";

const SocialToggle = ({ index, sectionData, mVP, tVP }) => {
  const toggledSection = useSpring({
    to:
      index === `${sectionData.name}`
        ? [
            {
              width:
                (index === `${sectionData.name}`) & !mVP & !tVP
                  ? "74.5%"
                  : index === `${sectionData.name}`
                  ? "87.5%"
                  : "0%",
              height:
                (index === `${sectionData.name}`) & !mVP & !tVP
                  ? "95%"
                  : index === `${sectionData.name}`
                  ? "73.5%"
                  : "0%",
              marginTop:
                (index === `${sectionData.name}`) & !mVP & !tVP
                  ? "2.25vh"
                  : "0vh",
            },
            {
              opacity: index === `${sectionData.name}` ? 1 : 0,
            },
          ]
        : [
            {
              opacity: index === `${sectionData.name}` ? 1 : 0,
              width:
                (index === `${sectionData.name}`) & !mVP & !tVP
                  ? "74.5%"
                  : index === `${sectionData.name}`
                  ? "87.5%"
                  : "0%",
              height:
                (index === `${sectionData.name}`) & !mVP & !tVP
                  ? "95%"
                  : index === `${sectionData.name}`
                  ? "73.5%"
                  : "0%",
              marginTop:
                (index === `${sectionData.name}`) & !mVP & !tVP
                  ? "2.25vh"
                  : "0vh",
            },
          ],
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
      marginTop: "0vh",
    },
    config: {
      duration: index === `${sectionData.name}` ? undefined : 250,
    },
  });

  return (
    <animated.div id="social-container" style={toggledSection}>
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "liamdavis_dev",
        }}
        options={{
          dnt: "true",
        }}
      />
    </animated.div>
  );
};

export default SocialToggle;
