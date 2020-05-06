import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../../Icon/IconIndex";

import "../../../styles/css/Sections/Projects.css";

const AnimatedIcon = animated(Icon);

const stroke = "#050406";

const useComponentWillMount = (func) => {
  const willMount = useRef(true);

  if (willMount.current) {
    func();
  }

  willMount.current = false;
};

let ProjectsToggle = ({ index, sectionData, mVP, tVP }) => {
  const [carouselIndex, setCarouselIndex] = useState(2);
  const [windowWidth, setWindowWidth] = useState(0);

  let resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useComponentWillMount(() => {
    resizeWindow();
  });

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const modifyCarouselIndex = (event) => {
    const carouselImages = document.querySelectorAll("img");
    console.log(carouselImages.length - 2);
    console.log(document.querySelector(".carousel-slider").clientWidth);
    let counter = carouselIndex;

    if (event.target.id === "back-arrow-icon") {
      counter--;
      setCarouselIndex(counter);
    } else if (event.target.id === "next-arrow-icon") {
      counter++;
      setCarouselIndex(counter);
    }
  };

  const { opacity, width, height, cursor, ...toggledProps } = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    width: index === `${sectionData.name}` ? "100%" : "0%",
    height: index === `${sectionData.name}` ? "100%" : "0%",
    cursor: index === `${sectionData.name}` ? "default" : "pointer",
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
      cursor: "pointer",
    },
  });

  const carouselSpring = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    width: index === `${sectionData.name}` ? 1 : 0,
    height: index === `${sectionData.name}` ? 1 : 0,
    from: {
      opacity: 0,
      width: 0,
      height: 0,
    },
    delay: index === `${sectionData.name}` ? 850 : 0,
  });

  return (
    <animated.div
      id="projects-container"
      style={{ opacity, width, height, cursor, ...toggledProps }}
    >
      <animated.div className="carousel-container">
        <animated.div
          className="carousel-slider"
          style={{
            opacity: carouselSpring.opacity,
            width:
              index === `${sectionData.name}`
                ? carouselSpring.width.interpolate({
                    range: [0, 0.1, 1],
                    output: ["0%", "100%", "100%"],
                  })
                : carouselSpring.width.interpolate({
                    range: [0, 0.9, 1],
                    output: ["0%", "0%", "100%"],
                  }),
            height:
              index === `${sectionData.name}`
                ? carouselSpring.height.interpolate({
                    range: [0, 0.1, 1],
                    output: ["0%", "100%", "100%"],
                  })
                : carouselSpring.height.interpolate({
                    range: [0, 0.9, 1],
                    output: ["0%", "0%", "100%"],
                  }),
          }}
        >
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
        </animated.div>
        <animated.div
          className="arrow-container"
          style={{
            opacity: carouselSpring.opacity,
            width:
              index === `${sectionData.name}`
                ? carouselSpring.width.interpolate({
                    range: [0, 0.1, 1],
                    output: ["0%", "100%", "100%"],
                  })
                : carouselSpring.width.interpolate({
                    range: [0, 0.9, 1],
                    output: ["0%", "0%", "100%"],
                  }),
            height:
              index === `${sectionData.name}`
                ? carouselSpring.height.interpolate({
                    range: [0, 0.1, 1],
                    output: ["0%", "100%", "100%"],
                  })
                : carouselSpring.height.interpolate({
                    range: [0, 0.9, 1],
                    output: ["0%", "0%", "100%"],
                  }),
          }}
        >
          <AnimatedIcon
            name="back-arrow"
            stroke={stroke}
            handleClick={modifyCarouselIndex}
          />
          <AnimatedIcon
            name="next-arrow"
            stroke={stroke}
            handleClick={modifyCarouselIndex}
          />
        </animated.div>
      </animated.div>
    </animated.div>
  );
};

export default ProjectsToggle;
