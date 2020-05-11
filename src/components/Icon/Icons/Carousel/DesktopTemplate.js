// Carousel icons designed by the Ionic framework team
// https://ionicons.com/
// https://ionicframework.com/

import React, { useEffect, Fragment } from "react";

import "../../../../styles/css/Sections/ProjectsToggle/DesktopTemplate.css";

const DesktopTemplate = ({ style, stroke, src, i }) => {
  const resizeImgOnLoad = () => {
    let svgWidth =
      document
        .getElementById(`desktop-template-${i}`)
        .querySelector("rect")
        .getBoundingClientRect().width -
      document
        .getElementById(`desktop-template-${i}`)
        .querySelector("rect")
        .getBoundingClientRect().width /
        15;
    let svgHeight =
      document
        .getElementById(`desktop-template-${i}`)
        .querySelector("rect")
        .getBoundingClientRect().height -
      document
        .getElementById(`desktop-template-${i}`)
        .querySelector("path")
        .getBoundingClientRect().height *
        0.8543;

    let imgMarginTop = -document
      .getElementById(`desktop-template-${i}`)
      .querySelector("rect")
      .getBoundingClientRect().bottom;

    document.getElementById(`desktop-img-${i}`).width = svgWidth;
    document.getElementById(`desktop-img-${i}`).height = svgHeight;
    document.getElementById(
      `desktop-img-${i}`
    ).style.marginTop = `${imgMarginTop}px`;
  };

  const resizeImgOnWindowResize = () => {
    let svgWidth =
      document
        .getElementById(`desktop-template-${i}`)
        .querySelector("rect")
        .getBoundingClientRect().width -
      document
        .getElementById(`desktop-template-${i}`)
        .querySelector("rect")
        .getBoundingClientRect().width /
        15;
    let svgHeight =
      document
        .getElementById(`desktop-template-${i}`)
        .querySelector("rect")
        .getBoundingClientRect().height -
      document
        .getElementById(`desktop-template-${i}`)
        .querySelector("path")
        .getBoundingClientRect().height *
        0.8543;

    let imgMarginTop =
      document
        .getElementById(`desktop-template-${i}`)
        .querySelector("rect")
        .getBoundingClientRect().top -
      document
        .getElementById(`desktop-template-${i}`)
        .querySelector(".carousel-container")
        .getBoundingClientRect().top;

    document.getElementById(`desktop-img-${i}`).width = svgWidth;
    document.getElementById(`desktop-img-${i}`).height = svgHeight;
    document.getElementById(
      `desktop-img-${i}`
    ).style.marginTop = `${imgMarginTop}px`;
  };

  useEffect(() => {
    resizeImgOnLoad();
    window.addEventListener("resize", resizeImgOnWindowResize);
    return () => {
      window.removeEventListener("resize", resizeImgOnWindowResize);
    };
  }, []);

  return (
    <Fragment>
      <img id={`desktop-img-${i}`} src={src} style={style}></img>
      <svg
        id={`desktop-template-${i}`}
        style={style}
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
      >
        <rect
          x="32"
          y="64"
          width="448"
          height="320"
          rx="32"
          ry="32"
          fill="none"
          stroke={stroke}
          strokeLinejoin="round"
          strokeWidth="32px"
        />
        <polygon
          points="304 448 296 384 216 384 208 448 304 448"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32px"
        />
        <line
          x1="368"
          y1="448"
          x2="144"
          y2="448"
          fill="none"
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32px"
        />
        <path d="M32,304v48a32.09,32.09,0,0,0,32,32H448a32.09,32.09,0,0,0,32-32V304Zm224,64a16,16,0,1,1,16-16A16,16,0,0,1,256,368Z" />
      </svg>
    </Fragment>
  );
};

export default DesktopTemplate;
