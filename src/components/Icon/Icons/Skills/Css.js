// Skill icons designed by the Ionic framework team
// https://ionicons.com/
// https://ionicframework.com/

import React from "react";

const Css = ({ id, className, style, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id={id}
    className={className}
    style={style}
    width="512"
    height="512"
    viewBox="0 0 512 512"
    onClick={() => {
      window.open("https://developer.mozilla.org/en-US/docs/Web/CSS");
    }}
  >
    <path
      fill={fill}
      d="M64,32,99,435.22,255.77,480,413,435.15,448,32ZM354.68,366.9,256.07,395l-98.46-28.24L150.86,289h48.26l3.43,39.56,53.59,15.16.13.28h0l53.47-14.85L315.38,265H203l-4-50H319.65L324,164H140l-4-49H376.58Z"
    />
  </svg>
);

export default Css;
