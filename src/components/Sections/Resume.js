import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import ResumeToggle from "./SectionToggles/ResumeToggle";

const AnimatedLink = animated(Link);
const AnimatedIcon = animated(Icon);

const Resume = ({
  index,
  mobileViewportPortrait,
  changeIndex,
  sectionData,
}) => {
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
    from: {
      height: "20%",
    },
  });

  const linkSpring = useSpring({
    cursor: index === `${sectionData.name}` ? "default" : "pointer",
    width:
      index === `${sectionData.name}`
        ? "95%"
        : (index !== `${sectionData.name}`) & (index !== null)
        ? "75%"
        : "90%",
    height:
      index === `${sectionData.name}`
        ? "97.5%"
        : (index !== `${sectionData.name}`) & (index !== null)
        ? "7.5%"
        : "10%",
    pointerEvents: index === `${sectionData.name}` ? "none" : "auto",
    from: {
      cursor: "pointer",
      width: "90%",
      height: "10%",
      pointerEvents: "auto",
    },
  });

  const linkMobileSpring = useSpring({
    width: index === `${sectionData.name}` ? "90%" : "60%",
    height: index === `${sectionData.name}` ? "95%" : "45%",
    from: {
      width: "60%",
      height: "45%",
    },
  });

  const textSpring = useSpring({
    opacity: index === null ? 1 : 0,
    fontSize: index === null ? "2rem" : "0rem",
    from: {
      opacity: 1,
      fontSize: "2rem",
    },
  });

  const iconLinkSpring = useSpring({
    opacity: index === null ? 1 : 0,
    pointerEvents: index === null ? "auto" : "none",
    from: {
      opacity: 1,
      pointerEvents: "auto",
    },
  });

  const iconSpring = useSpring({
    width: index === null ? "5.5rem" : "0rem",
    height: index === null ? "5.5rem" : "0rem",
    from: {
      width: "5.5rem",
      height: "5.5rem",
    },
  });

  const handleClick = () => {
    changeIndex("resume");
  };

  return (
    <Router>
      <animated.section
        className={`main-section ${sectionData.name}-section`}
        style={!mobileViewportPortrait ? sectionSpring : sectionMobileSpring}
      >
        <AnimatedLink
          className={`title-text main-text ${sectionData.name}-title`}
          id={
            index !== `${sectionData.name}` ? `${sectionData.name}-hover` : ``
          }
          to={`/${sectionData.name}`}
          onClick={handleClick}
          style={!mobileViewportPortrait ? linkSpring : linkMobileSpring}
        >
          <animated.p style={textSpring}>{sectionData.text}</animated.p>
        </AnimatedLink>
        <Switch>
          <Route
            exact
            path="/resume"
            render={(props) => (
              <ResumeToggle
                {...props}
                index={index}
                sectionData={sectionData}
                mobileViewportPortrait={mobileViewportPortrait}
              />
            )}
          />
        </Switch>
        <animated.a
          id={`${sectionData.name}-icon`}
          href={`${sectionData.link}`}
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinkSpring}
        >
          <AnimatedIcon
            name={`${sectionData.icon}`}
            id={`${sectionData.icon}-svg`}
            index={index}
            style={iconSpring}
          />
        </animated.a>
      </animated.section>
    </Router>
  );
};

export default Resume;
