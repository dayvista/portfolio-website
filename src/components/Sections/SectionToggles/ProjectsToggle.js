import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../../Icon/IconIndex";

import "../../../styles/css/Sections/Projects.css";

const AnimatedIcon = animated(Icon);

const stroke = "#ddd6e5";

const ProjectsToggle = ({ index, sectionData, mVP, tVP }) => {
  const [carouselIndex, setCarouselIndex] = useState(1);

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

  const [carouselProps, carouselSpring] = useSpring(() => ({}));

  const handleClick = (event) => {
    console.log(document.querySelectorAll("img")[carouselIndex].id);

    const carouselImages = document.querySelectorAll(".carousel-slider img");

    const size = carouselImages[0].clientWidth;
    let counter = carouselIndex;

    carouselSpring({
      transform: "translateX(" + -size * counter + "px)",
    });

    if (event.target.id === "back-arrow-icon") {
      if (counter <= 0) return;

      counter--;
      carouselSpring({
        transform: "translateX(" + -size * counter + "px)",
      });
      setCarouselIndex(counter);
    } else if (event.target.id === "next-arrow-icon") {
      if (counter >= carouselImages.length - 1) return;

      counter++;
      carouselSpring({
        transform: "translateX(" + -size * counter + "px)",
      });
      setCarouselIndex(counter);
    }

    if (carouselImages[counter].id === "last-project") {
      counter = carouselImages.length - 2;
      setCarouselIndex(counter);

      carouselSpring({
        transform: "translateX(" + -size * counter + "px)",
      });
    } else if (carouselImages[counter].id === "first-project") {
      counter = carouselImages.length - counter;
      setCarouselIndex(counter);

      carouselSpring({
        transform: "translateX(" + -size * counter + "px)",
      });
    }
  };

  // const imgSpring = useSpring({
  //   opacity: carouselIndex === document.querySelectorAll('img')[carouselIndex].key,
  //   from: {
  //     opacity: 0
  //   }
  // });

  return (
    <animated.div id="projects-container" style={toggled}>
      <animated.div className="carousel-container">
        <Icon name="back-arrow" stroke={stroke} handleClick={handleClick} />
        <animated.div className="carousel-slider" style={carouselProps}>
          <img key={0} id="last-project" src="../../temp/img/fire.jpg"></img>
          <img key={1} id="project-1" src="../../temp/img/earth.jpg"></img>
          <img key={2} id="project-2" src="../../temp/img/water.jpg"></img>
          <img key={4} id="project-3" src="../../temp/img/wind.jpg"></img>
          <img key={3} id="project-4" src="../../temp/img/fire.jpg"></img>
          <img key={5} id="first-project" src="../../temp/img/earth.jpg"></img>
        </animated.div>
        <Icon name="next-arrow" stroke={stroke} handleClick={handleClick} />
      </animated.div>
    </animated.div>
  );
};

export default ProjectsToggle;
