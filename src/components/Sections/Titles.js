import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

const AnimatedIcon = animated(Icon);

const stroke = "#492b05";

const Titles = ({ index, mVP, tVP, changeIndex }) => {
  const sectionSpring = useSpring({
    width: index === null ? "20%" : "5%",
    from: {
      width: "20%",
    },
  });

  const sectionMobileSpring = useSpring({
    height: index === null ? "20%" : "5%",
    from: {
      height: "20%",
    },
  });

  const titlesSpring = useSpring({
    width: index === null ? "90%" : "0%",
    height: index === null ? "15%" : "0%",
    from: {
      width: "90%",
      height: "15%",
    },
  });

  const titlesTabletSpring = useSpring({
    width: index === null ? "30%" : "0%",
    height: index === null ? "45%" : "0%",
    opacity: index === null ? 1 : 0,
    from: {
      width: "30%",
      height: "45%",
      opacity: 1,
    },
  });

  const titlesMobileSpring = useSpring({
    width: index === null ? "60%" : "0%",
    height: index === null ? "45%" : "0%",
    opacity: index === null ? 1 : 0,
    from: {
      width: "60%",
      height: "45%",
      opacity: 1,
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

  const textTabletSpring = useSpring({
    opacity: index === null ? 1 : 0,
    fontSize: index === null ? "4rem" : "0rem",
    from: {
      opacity: 1,
      fontSize: "4rem",
    },
  });

  const iconLinksSpring = useSpring({
    opacity: index === null ? 0 : 1,
    pointerEvents: index === null ? "none" : "auto",
    from: {
      opacity: 0,
      pointerEvents: "none",
    },
  });

  const iconsSpring = useSpring({
    width: index === null ? "0vw" : "5vw",
    height: index === null ? "0vw" : "5vw",
    from: {
      width: "0vw",
      height: "0vw",
    },
  });

  const iconsMobileSpring = useSpring({
    width: index === null ? "0vw" : "7vw",
    height: index === null ? "0vw" : "7vw",
    marginRight:
      (index !== null) & !tVP
        ? "2rem"
        : (index !== null) & tVP
        ? "4rem"
        : "0rem",
    marginLeft:
      (index !== null) & !tVP
        ? "2rem"
        : (index !== null) & tVP
        ? "4rem"
        : "0rem",
    from: {
      width: "0vw",
      height: "0vw",
      marginRight: "0rem",
      marginLeft: "0rem",
    },
  });

  const handleClick = () => {
    changeIndex(null);
    editLinks();
  };

  const editLinks = () => {
    let allLinks = document.querySelectorAll(".main-text");

    allLinks.forEach((node) => {
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
        className="titles-section"
        style={!mVP ? sectionSpring : sectionMobileSpring}
      >
        <animated.a
          id="github-icon"
          href="https://github.com/dayvista"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinksSpring}
        >
          <AnimatedIcon
            name="github"
            className="sidebar-icon"
            stroke={stroke}
            style={!mVP ? iconsSpring : iconsMobileSpring}
          />
        </animated.a>
        <animated.a
          id="linkedin-icon"
          href="https://linkedin.com/in/wjdiii"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinksSpring}
        >
          <AnimatedIcon
            name="linkedin"
            className="sidebar-icon"
            stroke={stroke}
            style={!mVP ? iconsSpring : iconsMobileSpring}
          />
        </animated.a>
        <animated.div
          className="title-text titles-title"
          id="title-1"
          style={
            !mVP ? titlesSpring : tVP ? titlesTabletSpring : titlesMobileSpring
          }
        >
          <animated.p style={!tVP ? textSpring : textTabletSpring}>
            William <br /> Davis
          </animated.p>
        </animated.div>
        <Icon name="sunrise" id="titles-logo" index={index} />
        <Link to="" onClick={handleClick}>
          <Icon name="home-button" index={index} stroke={stroke} mVP={mVP} />
        </Link>
        <animated.div
          className="title-text titles-title"
          id="title-2"
          style={
            !mVP ? titlesSpring : tVP ? titlesTabletSpring : titlesMobileSpring
          }
        >
          <animated.p style={!tVP ? textSpring : textTabletSpring}>
            Web
            <br />
            Developer
          </animated.p>
        </animated.div>
        <animated.a
          id="twitter-icon"
          href="https://twitter.com/liamdavis_dev"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinksSpring}
        >
          <AnimatedIcon
            name="twitter"
            className="sidebar-icon"
            stroke={stroke}
            style={!mVP ? iconsSpring : iconsMobileSpring}
          />
        </animated.a>
        <animated.a
          id="email-icon"
          href="mailto:wil@liamdavis.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={iconLinksSpring}
        >
          <AnimatedIcon
            name="email"
            className="sidebar-icon"
            stroke={stroke}
            style={!mVP ? iconsSpring : iconsMobileSpring}
          />
        </animated.a>
      </animated.section>
    </Router>
  );
};

export default Titles;
