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
  const [phonePortraitView, setPhonePortraitView] = useState(false);

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

  // Adjust from portrait to landscape view on mobile
  let mediaQueryListener = window.matchMedia("(max-width: 500px)");

  useEffect(() => {
    const mediaQueryResponse = (mql) => {
      if (mql.matches) {
        setPhonePortraitView(true);
      } else {
        setPhonePortraitView(false);
      }
    };

    mediaQueryResponse(mediaQueryListener);
    mediaQueryListener.addListener(mediaQueryResponse);

    return () => {
      mediaQueryListener.removeListener(mediaQueryResponse);
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
          phonePortraitView={phonePortraitView}
          changeIndex={setSelectedIndex}
          sectionData={sectionData[0]}
        />
        <Resume
          index={index}
          phonePortraitView={phonePortraitView}
          changeIndex={setSelectedIndex}
          sectionData={sectionData[1]}
        />
        <Social
          index={index}
          phonePortraitView={phonePortraitView}
          changeIndex={setSelectedIndex}
          sectionData={sectionData[2]}
        />
        <About
          index={index}
          phonePortraitView={phonePortraitView}
          changeIndex={setSelectedIndex}
          sectionData={sectionData[3]}
        />
        <Titles
          index={index}
          phonePortraitView={phonePortraitView}
          changeIndex={setSelectedIndex}
        />
      </animated.div>
    </Fragment>
  );
};

export default App;
