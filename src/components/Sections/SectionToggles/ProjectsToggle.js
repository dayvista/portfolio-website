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
  const [carouselIndex, setCarouselIndex] = useState(1);
  const [imageWidth, setImageWidth] = useState(0);
  const [carouselLength, setCarouselLength] = useState(0);

  let resizeWindow = () => {
    setImageWidth(window.innerWidth * 0.55 + 40);
  };

  useComponentWillMount(() => {
    resizeWindow();
    setCarouselLength(document.querySelectorAll("img").length);
  });

  useEffect(() => {
    resizeWindow();
    window.addEventListener("resize", resizeWindow);
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const carouselCounter = (event) => {
    let counter = carouselIndex;

    if (event.target.id === "back-arrow-icon") {
      if (counter > 0) {
        counter--;
        setCarouselIndex(counter);
      }
    } else if (event.target.id === "next-arrow-icon") {
      if (counter < carouselLength - 1) {
        counter++;
        setCarouselIndex(counter);
      }
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

  const imageSpring = useSpring({
    transform:
      (carouselIndex !== 1) & (carouselLength % 2 === 0)
        ? "translateX(" + imageWidth * 1 + "px)"
        : carouselIndex !== 1
        ? "translateX(" + imageWidth * 1 + "px)"
        : carouselLength % 2 === 0
        ? "translateX(" + imageWidth * 1.5 + "px)"
        : "translateX(" + imageWidth * 1 + "px)",
    from: {
      transform:
        carouselLength % 2 === 0
          ? "translateX(" + imageWidth * 1.5 + "px)"
          : "translateX(" + imageWidth * 1 + "px)",
    },
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
            style={imageSpring}
          ></animated.img>
          <animated.img
            id="proj-1"
            src="../../temp/img/earth.jpg"
            style={imageSpring}
          ></animated.img>
          <animated.img
            id="proj-2"
            src="../../temp/img/water.jpg"
            style={imageSpring}
          ></animated.img>
          <animated.img
            id="proj-3"
            src="../../temp/img/wind.jpg"
            style={imageSpring}
          ></animated.img>
          <animated.img
            id="proj-4"
            src="../../temp/img/fire.jpg"
            style={imageSpring}
          ></animated.img>
          <animated.img
            id="proj-1-clone"
            src="../../temp/img/earth.jpg"
            style={imageSpring}
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
            handleClick={carouselCounter}
          />
          <AnimatedIcon
            name="next-arrow"
            stroke={stroke}
            handleClick={carouselCounter}
          />
        </animated.div>
      </animated.div>
    </animated.div>
  );
};

export default ProjectsToggle;
