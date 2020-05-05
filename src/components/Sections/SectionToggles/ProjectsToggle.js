import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../../Icon/IconIndex";

import "../../../styles/css/Sections/Projects.css";

const AnimatedIcon = animated(Icon);

const stroke = "#050406";

const ProjectsToggle = ({ index, sectionData, mVP, tVP }) => {
  // useEffect(() => {
  //   findCarouselWidth();
  // }, []);

  const findCarouselWidth = () => {
    // const carouselImages = document.querySelectorAll(".carousel-slider img");

    // let imgWidth = carouselImages[2].clientWidth;

    // console.log(imgWidth);

    // return imgWidth;
    return;
  };

  const [carouselIndex, setCarouselIndex] = useState(2);

  const modifyCarouselIndex = (event) => {
    console.log(carouselIndex);
    let counter = carouselIndex;
    console.log(counter);

    if (event.target.id === "back-arrow-icon") {
      counter--;
      setCarouselIndex(counter);
    } else if (event.target.id === "next-arrow-icon") {
      counter++;
      setCarouselIndex(counter);
    }

    console.log(counter);
  };

  const toggled = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    width: index === `${sectionData.name}` ? "100%" : "0%",
    height: index === `${sectionData.name}` ? "100%" : "0%",
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
    },
  });

  const { opacity, ...carouselProps } = useSpring({
    opacity: index === "projects" ? 1 : 0,
    from: { opacity: 0 },
    delay: index === "projects" ? 1000 : 0,
  });

  return (
    <animated.div id="projects-container" style={toggled}>
      <animated.div className="carousel-container">
        <animated.div
          className="carousel-slider"
          style={{ opacity, ...carouselProps }}
        >
          <animated.img
            id="proj-3-clone"
            src="../../temp/img/wind.jpg"
          ></animated.img>
          <animated.img
            id="proj-4-clone"
            src="../../temp/img/fire.jpg"
          ></animated.img>
          <animated.img
            id="proj-1"
            src="../../temp/img/earth.jpg"
          ></animated.img>
          <animated.img
            id="proj-2"
            src="../../temp/img/water.jpg"
          ></animated.img>
          <animated.img
            id="proj-3"
            src="../../temp/img/wind.jpg"
          ></animated.img>
          <animated.img
            id="proj-4"
            src="../../temp/img/fire.jpg"
          ></animated.img>
          <animated.img
            id="proj-1-clone"
            src="../../temp/img/earth.jpg"
          ></animated.img>
          <animated.img
            id="proj-2-clone"
            src="../../temp/img/water.jpg"
          ></animated.img>
        </animated.div>
        <animated.div className="arrow-container">
          <AnimatedIcon
            name="back-arrow"
            stroke={stroke}
            style={{ opacity, ...carouselProps }}
            handleClick={modifyCarouselIndex}
          />
          <AnimatedIcon
            name="next-arrow"
            stroke={stroke}
            style={{ opacity, ...carouselProps }}
            handleClick={modifyCarouselIndex}
          />
        </animated.div>
      </animated.div>
    </animated.div>
  );
};

export default ProjectsToggle;
