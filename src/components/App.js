// Library dependencies
import React, { useState, useEffect, Fragment } from "react";
import { animated, useSpring } from "react-spring";

// Stylesheets
import "../styles/css/App.css";
import "../styles/css/Sections/Titles.css";

// Components
import sectionData from "./Sections/data/sectionData";

import Projects from "./Sections/Projects";
import Resume from "./Sections/Resume";
import Social from "./Sections/Social";
import About from "./Sections/About";
import Titles from "./Sections/Titles";

const App = () => {
  const [loadedStatus, setLoadedStatus] = useState(false);
  const [index, setIndex] = useState(null);
  const [viewport, setViewport] = useState("desktop");

  // Fade in on page load
  useEffect(() => {
    setLoadedStatus(true);
  }, []);

  const loadedFadeIn = useSpring({
    opacity: loadedStatus ? 1 : 0,
    from: {
      opacity: 0,
    },
  });

  // Make viewport adjustments for mobile responsiveness
  let mqMobilePortrait = window.matchMedia("(max-width: 500px)");
  let mqMobileLandscape = window.matchMedia(
    "(max-width: 815px) and (orientation: landscape)"
  );

  useEffect(() => {
    const mediaQueryResponse = (mq) => {
      if (mq.matches && mq.media.includes("500px")) {
        setViewport("mobile-portrait");
      } else if (mq.matches && mq.media.includes("landscape")) {
        setViewport("mobile-landscape");
      } else {
        setViewport("desktop");
      }
    };

    mediaQueryResponse(mqMobilePortrait);
    mediaQueryResponse(mqMobileLandscape);
    mqMobileLandscape.addListener(mediaQueryResponse);
    mqMobilePortrait.addListener(mediaQueryResponse);

    return () => {
      mqMobilePortrait.removeListener(mediaQueryResponse);
      mqMobileLandscape.removeListener(mediaQueryResponse);
    };
  }, []);

  // Set index state according to URL route address
  const setPage = () => {
    if (window.location.href.includes("projects")) {
      setIndex("projects");
    } else if (window.location.href.includes("resume")) {
      setIndex("resume");
    } else if (window.location.href.includes("social")) {
      setIndex("social");
    } else if (window.location.href.includes("about")) {
      setIndex("about");
    } else {
      setIndex(null);
    }
  };

  // Listen for back and forward buttons in browser
  useEffect(() => {
    setPage();
    window.addEventListener("popstate", () => {
      setPage();
    });

    return () => {
      window.removeEventListener("popstate", () => {
        setPage();
      });
    };
  }, []);

  // Set index from index prop passed upwards via callback from children
  const setSelectedIndex = (section) => {
    setIndex(section);
  };

  return (
    <Fragment>
      <animated.div className="container" style={loadedFadeIn}>
        <Projects
          index={index}
          viewport={viewport}
          changeIndex={setSelectedIndex}
          sectionData={sectionData[0]}
        />
        <Resume
          index={index}
          viewport={viewport}
          changeIndex={setSelectedIndex}
          sectionData={sectionData[1]}
        />
        <Social
          index={index}
          viewport={viewport}
          changeIndex={setSelectedIndex}
          sectionData={sectionData[2]}
        />
        <About
          index={index}
          viewport={viewport}
          changeIndex={setSelectedIndex}
          sectionData={sectionData[3]}
        />
        <Titles
          index={index}
          viewport={viewport}
          changeIndex={setSelectedIndex}
        />
      </animated.div>
    </Fragment>
  );
};

export default App;
