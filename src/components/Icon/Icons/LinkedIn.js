// All emojis designed by OpenMoji – the open-source emoji and icon project. License: CC BY-SA 4.0

import React from "react";

const LinkedIn = ({ style = {}, id, className, stroke = "#ddd6e5" }) => (
  <svg
    id={id}
    className={className}
    style={style}
    viewBox="0 0 72 72"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="color">
      <rect x="11" y="11" rx="3" width="50" height="50" fill="none" />
      <rect x="20" y="30" width="6" height="21" fill={stroke} />
      <circle cx="23" cy="22" r="3.5" fill={stroke} />
      <path
        fill={stroke}
        d="m42.5 35c-2.209 0-4 1.168-4 4.5v11.5h-6v-21h6v2.21h-0.0016a7.981 7.981 0 0 1 6.002-2.71c4.418 0 8 3.3 8 9v12.5h-6v-11.5c0-3.332-1.791-4.5-4-4.5"
      />
    </g>
    <g id="line">
      <rect
        x="11"
        y="11"
        rx="3"
        width="50"
        height="50"
        fill="none"
        stroke={stroke}
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <rect
        x="20"
        y="30"
        width="6"
        height="21"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle
        cx="23"
        cy="22"
        r="3.5"
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m42.5 35c-2.209 0-4 1.168-4 4.5v11.5h-6v-21h6v2.21h-0.0016a7.981 7.981 0 0 1 6.002-2.71c4.418 0 8 3.3 8 9v12.5h-6v-11.5c0-3.332-1.791-4.5-4-4.5"
      />
    </g>
  </svg>
);

export default LinkedIn;
