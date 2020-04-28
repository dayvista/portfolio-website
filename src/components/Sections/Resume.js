import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import ResumeToggle from "./SectionToggles/ResumeToggle";

const Resume = ({ index, phonePortraitView, changeIndex, sectionData }) => {
  const sectionSpring = useSpring({
    width:
      index === null
        ? "20vw"
        : index === `${sectionData.name}`
        ? "80vw"
        : "5vw",
    from: {
      width: "20vw",
    },
  });

  const sectionMobileSpring = useSpring({
    height:
      index === null
        ? "20vh"
        : index === `${sectionData.name}`
        ? "80vh"
        : "5vh",
    from: {
      height: "20vh",
    },
  });

  const textSpring = useSpring({
    opacity: (index === null) | (index === `${sectionData.name}`) ? 1 : 0,
    from: {
      opacity: 1,
    },
  });

  const iconSpring = useSpring({
    width: index === null ? "5vw" : "0vw",
    height: index === null ? "5vh" : "0vh",
    opacity: index === null ? 1 : 0,
    pointerEvents: index === null ? "auto" : "none",

    from: {
      width: "5vw",
      height: "5vh",
      opacity: 1,
      pointerEvents: "auto",
    },
  });

  const handleClick = () => {
    changeIndex("resume");
  };

  return (
    <Router>
      <animated.section
        className={`main-section ${sectionData.name}-section`}
        style={!phonePortraitView ? sectionSpring : sectionMobileSpring}
      >
        <Link
          className={`title-text main-text ${sectionData.name}-title`}
          to={`/${sectionData.name}`}
          onClick={handleClick}
          style={
            index === `${sectionData.name}`
              ? {
                  cursor: "default",
                  MozBoxShadow: "none",
                  WebkitBoxShadow: "none",
                  boxShadow: "none",
                }
              : { cursor: "pointer" }
          }
        >
          <animated.p style={textSpring}>{sectionData.text}</animated.p>
        </Link>
        <Switch>
          <Route
            exact
            path="/resume"
            render={(props) => (
              <ResumeToggle
                {...props}
                index={index}
                sectionData={sectionData}
              />
            )}
          />
        </Switch>
        <animated.a
          id={`${sectionData.name}-icon`}
          href={`${sectionData.link}`}
          target="_blank"
          rel="noopener noreferrer"
          style={iconSpring}
        >
          <Icon
            name={`${sectionData.icon}`}
            id={`${sectionData.icon}-svg`}
            index={index}
          />
        </animated.a>
      </animated.section>
    </Router>
  );
};

export default Resume;
