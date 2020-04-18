import React from "react";

import GitHub from "./GitHub";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";
import Email from "./Email";
import Sunrise from "./Sunrise";
import BackArrow from "./BackArrow";

const Icon = (props) => {
  switch (props.name) {
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
    case "back-arrow":
      return <BackArrow {...props} />;
    default:
      return <div />;
  }
};

export default Icon;
