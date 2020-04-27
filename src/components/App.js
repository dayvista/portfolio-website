// Library dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

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
  const [index, setIndex] = useState(null);
  const [phonePortraitView, setPhonePortraitView] = useState(false);

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

  const setSelectedIndex = (section) => {
    setIndex(section);
  };

  return (
    <Router>
      <div className="container">
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
          sectionData={sectionData[4]}
        />
      </div>
    </Router>
  );
};

export default App;
