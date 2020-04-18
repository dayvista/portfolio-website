import React from "react";

const Sunrise = (style = {}, width = "75", height = "75", className = "") => {
  return (
    <svg
      id="sunrise-emoji"
      className={`svg-icon ${className || ""}`}
      style={style}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="line">
        <path
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-miterlimit="10"
          stroke-width="2"
          d="M25.75,37.0488a15.0248,15.0248,0,0,1,14.7118-3.3742,15.3622,15.3622,0,0,1,7.5867,5.3881,11.5175,11.5175,0,0,1,1.6933,2.88"
        />
        <polyline
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          points="5 42.416 16.34 32.855 54.746 67"
        />
        <line
          x1="42.9832"
          x2="66.7554"
          y1="53.4452"
          y2="28.2196"
          fill="none"
          stroke="#000"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        />
      </g>
    </svg>
  );
};

export default Sunrise;
