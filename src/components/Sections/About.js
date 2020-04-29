import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import AboutToggle from "./SectionToggles/AboutToggle";

const AnimatedLink = animated(Link);

const About = ({ index, mobileViewportPortrait, changeIndex, sectionData }) => {
  const sectionSpring = useSpring({
    width:
      index === null ? "20%" : index === `${sectionData.name}` ? "80%" : "5%",
    from: {
      width: "20%",
    },
  });

  const sectionMobileSpring = useSpring({
    height:
      index === null ? "20%" : index === `${sectionData.name}` ? "80%" : "5%",
    flexDirection:
      (index === `${sectionData.name}`) & mobileViewportPortrait
        ? "column"
        : "row",
    from: {
      height: "20%",
      flexDirection: "row",
    },
  });

  const linkSpring = useSpring({
    cursor: index === `${sectionData.name}` ? "default" : "pointer",
    from: {
      cursor: "pointer",
    },
  });

  const linkMobileSpring = useSpring({
    opacity: index === `${sectionData.name}` ? 0 : 1,
    width: index === `${sectionData.name}` ? "0%" : "45%",
    height: index === `${sectionData.name}` ? "0%" : "60%",
    from: {
      opacity: 1,
      width: "45%",
      height: "60%",
    },
  });

  const textSpring = useSpring({
    opacity:
      (index === null) |
      ((index === `${sectionData.name}`) & !mobileViewportPortrait)
        ? 1
        : 0,
    from: {
      opacity: 1,
    },
  });

  const iconSpring = useSpring({
    width: index === null ? "5vw" : "0vw",
    height: index === null ? "5%" : "0%",
    opacity: index === null ? 1 : 0,
    pointerEvents: index === null ? "auto" : "none",
    from: {
      width: "5vw",
      height: "5%",
      opacity: 1,
      pointerEvents: "auto",
    },
  });

  const handleClick = () => {
    changeIndex("about");
  };

  return (
    <Router>
      <animated.section
        className={`main-section ${sectionData.name}-section`}
        style={!mobileViewportPortrait ? sectionSpring : sectionMobileSpring}
      >
        <AnimatedLink
          className={`title-text main-text ${sectionData.name}-title`}
          to="about"
          onClick={handleClick}
          style={!mobileViewportPortrait ? linkSpring : linkMobileSpring}
        >
          <animated.p style={textSpring}>{sectionData.text}</animated.p>
        </AnimatedLink>
        <animated.a
          id={`${sectionData.name}-icon`}
          href={`${sectionData.link}`}
          target="_blank"
          rel="noopener noreferrer"
          style={iconSpring}
        >
          <Icon name={`${sectionData.icon}`} id={`${sectionData.icon}-svg`} />
        </animated.a>
        <Switch>
          <Route
            exact
            path="/about"
            render={(props) => (
              <AboutToggle
                {...props}
                index={index}
                sectionData={sectionData}
                mobileViewportPortrait={mobileViewportPortrait}
              />
            )}
          />
        </Switch>
      </animated.section>
    </Router>
  );
};

export default About;
