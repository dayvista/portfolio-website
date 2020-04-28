import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import SocialToggle from "./SectionToggles/SocialToggle";

const Social = ({ index, phonePortraitView, changeIndex, sectionData }) => {
  const { width, opacity, justifyContent, ...socialSpringProps } = useSpring({
    width:
      index === null
        ? "20vw"
        : index === `${sectionData.name}`
        ? "80vw"
        : "5vw",
    opacity: (index === null) | (index === `${sectionData.name}`) ? 1 : 0,
    from: {
      width: "20vw",
      opacity: 1,
    },
  });

  const { height, ...socialSpringMobileProps } = useSpring({
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
    changeIndex("social");
  };

  return (
    <Router>
      <animated.section
        className={`main-section ${sectionData.name}-section`}
        style={
          !phonePortraitView
            ? { width, ...socialSpringProps }
            : { height, ...socialSpringMobileProps }
        }
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
          <animated.p style={{ opacity, ...socialSpringProps }}>
            {sectionData.text}
          </animated.p>
        </Link>
        <Switch>
          <Route
            exact
            path="/social"
            render={(props) => (
              <SocialToggle
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
          <Icon name={`${sectionData.icon}`} id={`${sectionData.icon}-svg`} />
        </animated.a>
        <Link
          id={`back-arrow-${sectionData.name}`}
          className="back-arrow-icon"
          to=""
          onClick={handleClick}
        >
          <Icon name="back-arrow" stroke="#fde3de" />
        </Link>
      </animated.section>
    </Router>
  );
};

export default Social;
