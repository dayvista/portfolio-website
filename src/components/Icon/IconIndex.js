// THANKS TO THE OPENMOJI TEAM @ https://openmoji.org/ for supplying the open-source emoji icons used in this project
// All emojis designed by OpenMoji – the open-source emoji and icon project. License: CC BY-SA 4.0

import React from "react";

import BackArrow from "./Icons/BackArrow";
import GitHub from "./Icons/GitHub";
import LinkedIn from "./Icons/LinkedIn";
import Twitter from "./Icons/Twitter";
import Email from "./Icons/Email";
import Sunrise from "./Icons/Sunrise";
import Selfie from "./Icons/Selfie";

const Icon = (props) => {
  switch (props.name) {
    case "back-arrow":
      return <BackArrow {...props} />;
    case "github":
      return <GitHub {...props} />;
    case "linkedin":
      return <LinkedIn {...props} />;
    case "twitter":
      return <Twitter {...props} />;
    case "email":
      return <Email {...props} />;
    case "sunrise":
      return <Sunrise {...props} />;
    case "selfie":
      return <Selfie {...props} />;
    default:
      return <div />;
  }
};

export default Icon;

// thanks to:
// Nishan Bajracharya @ https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91
// Chris Coyier @ https://css-tricks.com/change-color-of-svg-on-hover/
// hitautodestruct @ https://stackoverflow.com/questions/6088409/svg-drop-shadow-using-css3
