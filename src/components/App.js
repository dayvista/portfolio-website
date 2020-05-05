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
  const [mVP, setMVP] = useState(false);
  const [tVP, setTVP] = useState(false);

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

  // Make viewport adjustments for mobile and tablet (portrait views) responsiveness
  let mqMobilePortrait = window.matchMedia("(max-width: 500px)");
  let mqTabletPortrait = window.matchMedia(
    "(min-width: 768px) and (max-width: 1366px) and (orientation: portrait)"
  );

  useEffect(() => {
    const mediaQueryResponse = (mq) => {
      if (mq.matches && mq.media.includes("500px")) {
        setMVP(true);
      } else {
        setMVP(false);
      }
    };

    mediaQueryResponse(mqMobilePortrait);
    mqMobilePortrait.addListener(mediaQueryResponse);

    return () => {
      mqMobilePortrait.removeListener(mediaQueryResponse);
    };
  }, []);

  useEffect(() => {
    const mediaQueryResponse = (mq) => {
      if (mq.matches && mq.media.includes("portrait")) {
        setTVP(true);
        setMVP(true);
      } else {
        setTVP(false);
        setMVP(false);
      }
    };

    mediaQueryResponse(mqTabletPortrait);
    mqTabletPortrait.addListener(mediaQueryResponse);

    return () => {
      mqTabletPortrait.removeListener(mediaQueryResponse);
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

  // Set index from index prop passed up from children via callback
  const setSelectedIndex = (section) => {
    setIndex(section);
  };

  return (
    <Fragment>
      <animated.div id="display" style={loadedFadeIn}>
        <Projects
          index={index}
          mVP={mVP}
          tVP={tVP}
          changeIndex={setSelectedIndex}
          sectionData={sectionData[0]}
        />
        <Resume
          index={index}
          mVP={mVP}
          tVP={tVP}
          changeIndex={setSelectedIndex}
          sectionData={sectionData[1]}
        />
        <Social
          index={index}
          mVP={mVP}
          tVP={tVP}
          changeIndex={setSelectedIndex}
          sectionData={sectionData[2]}
        />
        <About
          index={index}
          mVP={mVP}
          tVP={tVP}
          changeIndex={setSelectedIndex}
          sectionData={sectionData[3]}
        />
        <Titles
          index={index}
          mVP={mVP}
          tVP={tVP}
          changeIndex={setSelectedIndex}
        />
      </animated.div>
    </Fragment>
  );
};

export default App;
