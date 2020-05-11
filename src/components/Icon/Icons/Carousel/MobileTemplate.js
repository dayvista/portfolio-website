// Carousel icons designed by the Ionic framework team
// https://ionicons.com/
// https://ionicframework.com/

import React, { useEffect, Fragment } from "react";

import "../../../../styles/css/Sections/ProjectsToggle/MobileTemplate.css";

const MobileTemplate = ({ style, stroke, src, i }) => {
  const resizeImgOnLoad = () => {
    let svgWidth = document
      .getElementById(`mobile-template-${i}`)
      .querySelector("rect")
      .getBoundingClientRect().width;
    let svgHeight = document
      .getElementById(`mobile-template-${i}`)
      .querySelector("rect")
      .getBoundingClientRect().height;

    let imgMarginTop =
      document
        .getElementById(`mobile-template-${i}`)
        .querySelector("rect")
        .getBoundingClientRect().bottom -
      document
        .getElementById(`mobile-template-${i}`)
        .querySelector("path")
        .getBoundingClientRect().height /
        2;

    document.getElementById(`mobile-img-${i}`).width = svgWidth;
    document.getElementById(`mobile-img-${i}`).height = svgHeight;
    document.getElementById(
      `mobile-img-${i}`
    ).style.marginTop = `${imgMarginTop}px`;
  };

  const resizeImgOnWindowResize = () => {
    let svgWidth =
      document
        .getElementById(`mobile-template-${i}`)
        .querySelector("rect")
        .getBoundingClientRect().width * 0.95;
    let svgHeight =
      document
        .getElementById(`mobile-template-${i}`)
        .querySelector("rect")
        .getBoundingClientRect().height * 0.97;

    let imgMarginTop =
      document
        .getElementById(`mobile-template-${i}`)
        .querySelector("rect")
        .getBoundingClientRect().top -
      document.querySelector(".carousel-container").getBoundingClientRect().top;

    document.getElementById(`mobile-img-${i}`).width = svgWidth;
    document.getElementById(`mobile-img-${i}`).height = svgHeight;
    document.getElementById(
      `mobile-img-${i}`
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
      <img id={`mobile-img-${i}`} src={src} style={style}></img>
      <svg
        id={`mobile-template-${i}`}
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
    </Fragment>
  );
};

export default MobileTemplate;
