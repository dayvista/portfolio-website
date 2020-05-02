// Carousel icons designed by the Ionic framework team
// https://ionicons.com/
// https://ionicframework.com/

import React from "react";

const NextArrow = ({ style, stroke }) => (
  <svg
    id="next-arrow-icon"
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <polyline
      points="262.62 336 342 256 262.62 176"
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32px"
    />
    <line
      x1="330.97"
      y1="256"
      x2="170"
      y2="256"
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32px"
    />
    <path
      d="M256,448c106,0,192-86,192-192S362,64,256,64,64,150,64,256,150,448,256,448Z"
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      strokeWidth="32px"
    />
  </svg>
);

export default NextArrow;
