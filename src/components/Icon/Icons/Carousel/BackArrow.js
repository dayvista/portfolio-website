// Carousel icons designed by the Ionic framework team
// https://ionicons.com/
// https://ionicframework.com/

import React from "react";

const BackArrow = ({ style, stroke, handleClick }) => (
  <svg
    id="back-arrow-icon"
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
    onClick={handleClick}
  >
    <polyline
      points="249.38 336 170 256 249.38 176"
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32px"
    />
    <line
      x1="181.03"
      y1="256"
      x2="342"
      y2="256"
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32px"
    />
    <path
      d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
      fill="none"
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="32px"
      strokeMiterlimit="10"
      strokeWidth="32px"
    />
  </svg>
);

export default BackArrow;
