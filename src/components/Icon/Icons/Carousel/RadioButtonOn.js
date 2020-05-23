// Carousel icons designed by the Ionic framework team
// https://ionicons.com/
// https://ionicframework.com/

import React from "react";

const RadioButtonOn = ({ style, stroke, id }) => (
  <svg
    className="radio-button-on"
    id={id}
    xmlns="http://www.w3.org/2000/svg"
    width="512"
    height="512"
    viewBox="0 0 512 512"
  >
    <path
      d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z"
      fill="none"
      stroke={stroke}
      strokeMiterlimit="10"
      strokeWidth="32px"
    />
    <circle style={style} cx="256" cy="256" r="144" />
  </svg>
);

export default RadioButtonOn;
