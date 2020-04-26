// Library dependencies
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";

// Stylesheets
import "../styles/css/App.css";
import "../styles/css/Sections/Titles.css";

// Components
import Projects from "./Sections/Projects";
import Resume from "./Sections/Resume";
import Social from "./Sections/Social";
import About from "./Sections/About";

import Icon from "./Icon/IconIndex";

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

  const projectsSpring = useSpring({
    width: index === null ? "20vw" : index === "projects" ? "80vw" : "5vw",
    from: {
      width: "20vw",
      height: "100vh",
    },
  });

  const projectsSpringMobile = useSpring({
    height: index === null ? "20vh" : index === "projects" ? "80vh" : "5vh",
    from: {
      width: "100vw",
      height: "20vh",
    },
  });

  const resumeSpring = useSpring({
    width: index === null ? "20vw" : index === "resume" ? "80vw" : "5vw",
    from: {
      width: "20vw",
      height: "100vh",
    },
  });

  const resumeSpringMobile = useSpring({
    height: index === null ? "20vh" : index === "resume" ? "80vh" : "5vh",
    from: {
      width: "100vw",
      height: "20vh",
    },
  });

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

  const aboutSpring = useSpring({
    width: index === null ? "20vw" : index === "about" ? "80vw" : "5vw",
    from: {
      width: "20vw",
      height: "100vh",
    },
  });

  const aboutSpringMobile = useSpring({
    height: index === null ? "20vh" : index === "about" ? "80vh" : "5vh",
    from: {
      width: "100vw",
      height: "20vh",
    },
  });

  const titlesSpring = useSpring({
    width: index === null ? "20vw" : index === "titles" ? "80vw" : "5vw",
    from: {
      width: "20vw",
      height: "100vh",
    },
  });

  const titlesSpringMobile = useSpring({
    height: index === null ? "20vh" : index === "titles" ? "80vh" : "5vh",
    from: {
      width: "100vw",
      height: "20vh",
    },
  });

  return (
    <Router>
      <div className="container">
        <animated.section
          className="projects-section"
          style={
            !mediaQueryListener.matches ? projectsSpring : projectsSpringMobile
          }
        >
          <Link
            className="title-text projects-title"
            to="/projects"
            onClick={() => setIndex("projects")}
          >
            <p>Projects</p>
          </Link>
          <Switch>
            <Route path="/projects" component={Projects} />
          </Switch>
          <a
            id="projects-icon"
            href="https://github.com/dayvista"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" />
          </a>
          <Link id="back-arrow-icon" to="">
            <Icon name="back-arrow" />
          </Link>
        </animated.section>
        <animated.section
          className="resume-section"
          style={
            !mediaQueryListener.matches ? resumeSpring : resumeSpringMobile
          }
        >
          <Link
            className="title-text resume-title"
            to="/resume"
            onClick={() => setIndex("resume")}
          >
            <p>Resume</p>
          </Link>
          <Switch>
            <Route path="/resume" component={Resume} />
          </Switch>
          <a
            id="resume-icon"
            href="https://linkedin.com/in/wjdiii"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" />
          </a>
        </animated.section>
        <animated.section
          className="social-section"
          style={
            !mediaQueryListener.matches ? socialSpring : socialSpringMobile
          }
        >
          <Link
            className="title-text social-title"
            to="/social"
            onClick={() => setIndex("social")}
          >
            <p>Social</p>
          </Link>
          <Switch>
            <Route path="/social" component={Social} />
          </Switch>
          <a
            id="social-icon"
            href="https://twitter.com/dayvista_dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="twitter" />
          </a>
        </animated.section>
        <animated.section
          className="about-section"
          style={!mediaQueryListener.matches ? aboutSpring : aboutSpringMobile}
        >
          <Link
            className="title-text about-title"
            to="/about"
            onClick={() => setIndex("about")}
          >
            <p>About</p>
          </Link>
          <Switch>
            <Route path="/about" component={About} />
          </Switch>
          <a
            id="about-icon"
            href="mailto:liam@dayvista.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="email" />
          </a>
        </animated.section>
        <animated.section
          className="titles-section"
          style={
            !mediaQueryListener.matches ? titlesSpring : titlesSpringMobile
          }
        >
          <div className="title-text titles-title">
            <p>William Davis</p>
          </div>
          <div id="titles-logo">
            <Icon name="sunrise" />
          </div>
          <div className="title-text titles-title">
            <p>Web Developer</p>
          </div>
        </animated.section>
      </div>
    </Router>
  );
};

export default App;
