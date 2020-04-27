import React from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../Icon/IconIndex";

const stroke = "#FAEDDB";

const Titles = ({ index, phonePortraitView }) => {
  const { width, opacity, ...titlesSpringProps } = useSpring({
    width: index === null ? "20vw" : "5vw",
    opacity: index === null ? 1 : 0,
    from: {
      width: "20vw",
      opacity: 1,
    },
  });

  const { height, ...titlesSpringMobileProps } = useSpring({
    height: index === null ? "20vh" : "5vh",
    from: {
      height: "20vh",
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

  return (
    <animated.section
      className="titles-section"
      style={
        !phonePortraitView
          ? { width, ...titlesSpringProps }
          : { height, ...titlesSpringMobileProps }
      }
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
        <Icon
          name="linkedin"
          className="sidebar-icon"
          stroke={stroke}
          fill="#FDF6EC"
        />
      </animated.a>
      <animated.div
        className="title-text titles-title"
        style={{ opacity, ...titlesSpringProps }}
      >
        <animated.p style={{ opacity, ...titlesSpringProps }}>
          William Davis
        </animated.p>
      </animated.div>
      <div id="titles-logo">
        <Icon name="sunrise" index={index} />
      </div>
      <animated.div
        className="title-text titles-title"
        style={{ opacity, ...titlesSpringProps }}
      >
        <animated.p style={{ opacity, ...titlesSpringProps }}>
          Web Developer
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
  );
};

export default Titles;
