// Skill icons designed by the Ionic framework team
// https://ionicons.com/
// https://ionicframework.com/

import React from "react";

const Html = ({ id, className, style, fill }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id={id}
    className={className}
    style={style}
    width="512"
    height="512"
    viewBox="0 0 512 512"
    onClick={() => {
      window.open("https://developer.mozilla.org/en-US/docs/Web/HTML");
    }}
  >
    <path
      fill={fill}
      d="M64,32,98.94,435.21,255.77,480,413,435.15,448,32ZM372,164H188l4,51H368L354.49,366.39,256,394.48l-98.68-28L150.54,289H198.8l3.42,39.29L256,343.07l53.42-14.92L315,264H148L135.41,114.41l240.79,0Z"
    />
  </svg>
);

export default Html;
