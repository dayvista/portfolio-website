import React from "react";
import { animated, useSpring } from "react-spring";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";

import Icon from "../Icon/IconIndex";

const stroke = "#FAEDDB";
const homeStroke = "#492b05";

const Titles = ({ index, phonePortraitView, changeIndex }) => {
  const sectionSpring = useSpring({
    width: index === null ? "20vw" : "5vw",
    from: {
      width: "20vw",
    },
  });

  const sectionMobileSpring = useSpring({
    height: index === null ? "20vh" : "5vh",
    from: {
      height: "20vh",
    },
  });

  const textSpring = useSpring({
    opacity: index === null ? 1 : 0,
    fontSize: index === null ? "2vw" : "0vw",
    from: {
      opacity: 1,
      fontSize: "2vw",
    },
  });

  const iconsSpring = useSpring({
    width: index === null ? "0vw" : "5vw",
    opacity: index === null ? 0 : 1,
    pointerEvents: index === null ? "none" : "auto",

    from: {
      width: "0vw",
      opacity: 0,
      pointerEvents: "none",
    },
  });

  const handleClick = () => {
    changeIndex(null);
  };

  return (
    <Router>
      <animated.section
        className="titles-section"
        style={!phonePortraitView ? sectionSpring : sectionMobileSpring}
      >
        <animated.a
          id="github-icon"
          href="https://github.com/dayvista"
          target="_blank"
          rel="noopener noreferrer"
          style={iconsSpring}
        >
          <Icon name="github" className="sidebar-icon" stroke={stroke} />
        </animated.a>
        <animated.a
          id="linkedin-icon"
          href="https://linkedin.com/in/wjdiii"
          target="_blank"
          rel="noopener noreferrer"
          style={iconsSpring}
        >
          <Icon name="linkedin" className="sidebar-icon" stroke={stroke} />
        </animated.a>
        <animated.div className="title-text titles-title" style={textSpring}>
          <animated.p style={textSpring}>
            William
            <br />
            Davis
          </animated.p>
        </animated.div>
        <div id="titles-logo">
          <Icon name="sunrise" index={index} />
        </div>
        <Link to="" onClick={handleClick}>
          <Icon name="home-button" index={index} stroke={homeStroke} />
        </Link>
        <animated.div className="title-text titles-title" style={textSpring}>
          <animated.p style={textSpring}>
            Web
            <br />
            Developer
          </animated.p>
        </animated.div>
        <animated.a
          id="twitter-icon"
          href="https://twitter.com/dayvista_dev"
          target="_blank"
          rel="noopener noreferrer"
          style={iconsSpring}
        >
          <Icon name="twitter" className="sidebar-icon" stroke={stroke} />
        </animated.a>
        <animated.a
          id="email-icon"
          href="mailto:liam@dayvista.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={iconsSpring}
        >
          <Icon name="email" className="sidebar-icon" stroke={stroke} />
        </animated.a>
      </animated.section>
    </Router>
  );
};

export default Titles;
