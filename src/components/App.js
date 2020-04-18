import React from "react";

import "../styles/css/App.css";

import Social from "./Sections/Social";
import Resume from "./Sections/Resume";
import Projects from "./Sections/Projects";
import About from "./Sections/About";
import Titles from "./Sections/Titles";

const App = () => {
  return (
    <div className="display">
      <Projects />
      <Resume />
      <Social />
      <About />
      <Titles />
    </div>
  );
};

export default App;
