// THANKS TO THE OPENMOJI TEAM @ https://openmoji.org/ for supplying the open-source emoji icons used in this project
// All emojis designed by OpenMoji – the open-source emoji and icon project. License: CC BY-SA 4.0

import React, { Fragment } from "react";

// UI icons
import HomeButton from "./Icons/HomeButton";
import GitHub from "./Icons/GitHub";
import LinkedIn from "./Icons/LinkedIn";
import Twitter from "./Icons/Twitter";
import Email from "./Icons/Email";
import Sunrise from "./Icons/Sunrise";
import Selfie from "./Icons/Selfie";

// Skill icons
import Html from "./Icons/Skills/Html";
import Css from "./Icons/Skills/Css";
import JavaScript from "./Icons/Skills/JavaScript";
import ReactJS from "./Icons/Skills/ReactJS";
import NodeJS from "./Icons/Skills/NodeJS";
import Python from "./Icons/Skills/Python";

// Carousel icons
import DesktopTemplate from "./Icons/Carousel/DesktopTemplate";
import MobileTemplate from "./Icons/Carousel/MobileTemplate";
import BackArrow from "./Icons/Carousel/BackArrow";
import NextArrow from "./Icons/Carousel/NextArrow";
import RadioButtonOn from "./Icons/Carousel/RadioButtonOn";
import RadioButtonOff from "./Icons/Carousel/RadioButtonOff";

const Icon = (props) => {
  switch (props.name) {
    // Contact/social media links
    case "github":
      return <GitHub {...props} />;
    case "linkedin":
      return <LinkedIn {...props} />;
    case "twitter":
      return <Twitter {...props} />;
    case "email":
      return <Email {...props} />;
    // Sidebar SVGs
    case "sunrise":
      return <Sunrise {...props} />;
    case "home-button":
      return <HomeButton {...props} />;
    // About section SVGs
    case "selfie":
      return <Selfie {...props} />;
    case "html":
      return <Html {...props} />;
    case "css":
      return <Css {...props} />;
    case "javascript":
      return <JavaScript {...props} />;
    case "react":
      return <ReactJS {...props} />;
    case "node":
      return <NodeJS {...props} />;
    case "python":
      return <Python {...props} />;
    // Projects Section SVGs
    case "back-arrow":
      return <BackArrow {...props} />;
    case "next-arrow":
      return <NextArrow {...props} />;
    case "radio-button-on":
      return <RadioButtonOn {...props} />;
    case "radio-button-off":
      return <RadioButtonOff {...props} />;
    case "desktop-template":
      return <DesktopTemplate {...props} />;
    case "mobile-template":
      return <MobileTemplate {...props} />;
    default:
      return <Fragment style={{ display: "none" }} />;
  }
};

export default Icon;

// thanks to:
// Nishan Bajracharya @ https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
// Chris Coyier @ https://css-tricks.com/change-color-of-svg-on-hover/
// hitautodestruct @ https://stackoverflow.com/questions/6088409/svg-drop-shadow-using-css3
