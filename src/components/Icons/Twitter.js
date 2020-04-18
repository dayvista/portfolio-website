import React from "react";

const Twitter = (style = {}, width = "75", height = "75", className = "") => {
  return (
    <svg
      id="twitter-emoji"
      className={`svg-icon ${className || ""}`}
      style={style}
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="line">
        <path
          fill="none"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="2"
          d="M58.0417,16.6667c0,0-2.5833,2.0833-6.2083,2.4583c0,0-5.7083-6.375-13.875-0.8333c-3.6667,2.5833-4,8.0417-3.375,10 c0,0-11.0833,0.875-20.75-10.4583c0,0-4.3333,7.5,2.8333,13.5c0,0-2.1182,0.3333-4.1317-1.3333c0,0-0.9517,7.75,7.715,9.9167 c0,0-0.5833,1-4.0833,0c0,0,0.5833,6.3333,8.8333,7.25c0,0-4.4569,4.5833-14.4784,4c0,0,16.5618,12.4167,34.4784-2.5833 c10-8.5,9.6667-20.75,9.5-22.5833c0,0,3.9491-3,4.9746-4.9167c0,0-3.0579,1-5.5579,1 C53.9167,22.0833,57.25,20.3333,58.0417,16.6667z"
        />
      </g>
    </svg>
  );
};

export default Twitter;
