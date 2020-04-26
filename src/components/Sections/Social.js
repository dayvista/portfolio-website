import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import SocialToggle from "./SectionToggles/SocialToggle";

const Social = ({ index, phonePortraitView, changeIndex, sectionData }) => {
  const socialSpring = useSpring({
    width: index === null ? "20vw" : index === "social" ? "80vw" : "5vw",
    from: {
      width: "20vw",
      height: "100vh",
    },
  });

  const socialSpringMobile = useSpring({
    height: index === null ? "20vh" : index === "social" ? "80vh" : "5vh",
    from: {
      width: "100vw",
      height: "20vh",
    },
  });

  const handleClick = () => {
    changeIndex("social");
  };

  return (
    <animated.section
      className={`${sectionData.name}-section`}
      style={!phonePortraitView ? socialSpring : socialSpringMobile}
    >
      <Link
        className={`title-text ${sectionData.name}-title`}
        to={`/${sectionData.name}`}
        onClick={handleClick}
      >
        <p>{sectionData.text}</p>
      </Link>
      <Switch>
        <Route path={`/${sectionData.name}`} component={SocialToggle} />
      </Switch>
      <a
        id={`${sectionData.name}-icon`}
        href={`${sectionData.link}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name={`${sectionData.icon}`} />
      </a>
      <Link
        id={`back-arrow-${sectionData.name}`}
        className="back-arrow-icon"
        to=""
        onClick={handleClick}
      >
        <Icon name="back-arrow" />
      </Link>
    </animated.section>
  );
};

export default Social;
