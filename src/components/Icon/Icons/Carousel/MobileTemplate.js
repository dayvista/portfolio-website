// Carousel icons designed by the Ionic framework team
// https://ionicons.com/
// https://ionicframework.com/

import React from "react";

const MobileTemplate = ({ style, stroke }) => (
  <svg
    id="mobile-template"
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <rect
      x="128"
      y="16"
      width="256"
      height="480"
      rx="48"
      ry="48"
      style={{
        fill: "none",
        stroke: `${stroke}`,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "32px",
      }}
    />
    <path
      d="M176,16h24a8,8,0,0,1,8,8h0a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16h0a8,8,0,0,1,8-8h24"
      style={{
        fill: "none",
        stroke: `${stroke}`,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "32px",
      }}
    />
  </svg>
);

export default MobileTemplate;
