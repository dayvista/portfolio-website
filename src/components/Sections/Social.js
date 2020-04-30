import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import SocialToggle from "./SectionToggles/SocialToggle";

const AnimatedLink = animated(Link);
const AnimatedIcon = animated(Icon);

const Social = ({
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
    width: (index !== `${sectionData.name}`) & (index !== null) ? "75%" : "90%",
    height:
      (index !== `${sectionData.name}`) & (index !== null) ? "7.5%" : "10%",
    from: {
      cursor: "pointer",
      width: "90%",
      height: "10%",
    },
  });

  const linkMobileSpring = useSpring({
    opacity: index === `${sectionData.name}` ? 0 : 1,
    width: index === `${sectionData.name}` ? "0%" : "60%",
    height: index === `${sectionData.name}` ? "0%" : "45%",
    from: {
      opacity: 1,
      width: "60%",
      height: "45%",
    },
  });

  const textSpring = useSpring({
    opacity: (index === null) | (index === `${sectionData.name}`) ? 1 : 0,
    from: {
      opacity: 1,
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
    changeIndex("social");
  };

  return (
    <Router>
      <animated.section
        className={`main-section ${sectionData.name}-section`}
        style={!mobileViewportPortrait ? sectionSpring : sectionMobileSpring}
      >
        <AnimatedLink
          className={`title-text main-text ${sectionData.name}-title`}
          to={`/${sectionData.name}`}
          onClick={handleClick}
          style={!mobileViewportPortrait ? linkSpring : linkMobileSpring}
        >
          <animated.p style={textSpring}>{sectionData.text}</animated.p>
        </AnimatedLink>
        <Switch>
          <Route
            exact
            path="/social"
            render={(props) => (
              <SocialToggle
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
            style={iconSpring}
          />
        </animated.a>
      </animated.section>
    </Router>
  );
};

export default Social;
