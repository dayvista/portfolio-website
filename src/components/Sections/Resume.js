import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

import ResumeToggle from "./SectionToggles/ResumeToggle";

const AnimatedLink = animated(Link);
const AnimatedIcon = animated(Icon);

const Resume = ({ index, mVP, tVP, changeIndex, sectionData }) => {
  useEffect(() => {
    editLinks();
  }, [index === `${sectionData.name}`]);

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
    from: {
      cursor: "pointer",
      width: "90%",
      height: "10%",
    },
  });

  const linkTabletSpring = useSpring({
    width: index === `${sectionData.name}` ? "90%" : "80%",
    height: index === `${sectionData.name}` ? "95%" : "45%",
    from: {
      width: "80%",
      height: "45%",
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
    fontSize:
      (index === null) & tVP ? "4rem" : index === null ? "2rem" : "0rem",
    from: {
      opacity: 1,
      fontSize: tVP ? "4rem" : "2rem",
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

  const iconTabletSpring = useSpring({
    width: index === null ? "6.5rem" : "0rem",
    height: index === null ? "6.5rem" : "0rem",
    from: {
      width: "6.5rem",
      height: "6.5rem",
    },
  });

  const handleClick = () => {
    changeIndex(`${sectionData.name}`);
    editLinks();
  };

  const editLinks = () => {
    if (document.getElementById(`selected-link`)) {
      if (document.getElementById(`selected-link`).hasAttribute("href")) {
        document.getElementById(`selected-link`).removeAttribute("href");
      }
    }

    let notSelected = document.querySelectorAll(".main-text");

    notSelected.forEach((node) => {
      if (node.id !== "selected-link" && !node.hasAttribute("href")) {
        if (node.classList[2] === "projects-title") {
          node.href = "/projects";
        } else if (node.classList[2] === "resume-title") {
          node.href = "/resume";
        } else if (node.classList[2] === "social-title") {
          node.href = "/social";
        } else if (node.classList[2] === "about-title") {
          node.href = "/about";
        }
      }
    });
  };

  return (
    <Router>
      <animated.section
        className={`main-section ${sectionData.name}-section`}
        style={!mVP ? sectionSpring : sectionMobileSpring}
      >
        <AnimatedLink
          className={`title-text main-text ${sectionData.name}-title`}
          id={
            index !== `${sectionData.name}`
              ? `${sectionData.name}-hover`
              : `selected-link`
          }
          to={`/${sectionData.name}`}
          onClick={handleClick}
          style={!mVP ? linkSpring : tVP ? linkTabletSpring : linkMobileSpring}
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
                mVP={mVP}
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
            style={!tVP ? iconSpring : iconTabletSpring}
          />
        </animated.a>
      </animated.section>
    </Router>
  );
};

export default Resume;
