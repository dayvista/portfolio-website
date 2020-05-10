import React, { useState, useRef, Fragment } from "react";
import { animated, useSpring, useSprings } from "react-spring";

import Icon from "../../Icon/IconIndex";

import projectsData from "../data/projectsData";

import "../../../styles/css/Sections/Projects.css";

const AnimatedIcon = animated(Icon);

const stroke = "#050406";

const ProjectsToggle = ({ index, sectionData, mVP, tVP }) => {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const carouselCounter = (event) => {
    let index = carouselIndex;

    if (
      event.target.id === "back-arrow-icon" ||
      event.target.parentElement.id === "back-arrow-icon"
    ) {
      console.log(index);
      if (index === 0) {
        index = projectsData.length - 1;
        setCarouselIndex(index);
      } else if (index > 0) {
        index--;
        setCarouselIndex(index);
      }
    } else if (
      event.target.id === "next-arrow-icon" ||
      event.target.parentElement.id === "next-arrow-icon"
    ) {
      if (index === projectsData.length - 1) {
        index = 0;
        setCarouselIndex(index);
      } else if (index < projectsData.length - 1) {
        index++;
        setCarouselIndex(index);
      }
    }
  };

  const { opacity, width, height, cursor, ...toggledProps } = useSpring({
    to: [
      {
        width: index === `${sectionData.name}` ? "100%" : "0%",
        height: index === `${sectionData.name}` ? "100%" : "0%",
      },
      {
        opacity: index === `${sectionData.name}` ? 1 : 0,
        cursor: index === `${sectionData.name}` ? "default" : "pointer",
      },
    ],
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
      cursor: "pointer",
    },
  });

  const carouselSpring = useSpring({
    to:
      index === `${sectionData.name}`
        ? [
            {
              width: index === `${sectionData.name}` ? "100%" : "0%",
              height: index === `${sectionData.name}` ? "100%" : "0%",
            },
            { opacity: index === `${sectionData.name}` ? 1 : 0 },
          ]
        : [
            {
              width: index === `${sectionData.name}` ? "100%" : "0%",
              height: index === `${sectionData.name}` ? "100%" : "0%",
              opacity: index === `${sectionData.name}` ? 1 : 0,
            },
          ],
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
    },
  });

  // transition: from "initial" to "none"
  const imgSprings = useSprings(
    projectsData.length,
    projectsData.map((project, i) => ({
      opacity: i === carouselIndex ? 1 : 0,
      from: {
        opacity: i === carouselIndex ? 1 : 0,
      },
    }))
  );

  return (
    <animated.div
      id="projects-container"
      style={{ opacity, width, height, cursor, ...toggledProps }}
    >
      <animated.div className="carousel-container">
        {!mVP && !tVP ? (
          <Fragment>
            <animated.div
              className="arrow-container"
              id="arrow-container-1"
              style={{
                opacity: carouselSpring.opacity,
                width:
                  index === `${sectionData.name}`
                    ? carouselSpring.width.interpolate({
                        range: [0, 0.1, 1],
                        output: ["0vw", "10vw", "10vw"],
                      })
                    : carouselSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "0vw", "10vw"],
                      }),
                height:
                  index === `${sectionData.name}`
                    ? carouselSpring.height.interpolate({
                        range: [0, 0.1, 1],
                        output: ["0%", "15%", "15%"],
                      })
                    : carouselSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0%", "0%", "15%"],
                      }),
              }}
            >
              <AnimatedIcon
                name="back-arrow"
                key="back-arrow"
                stroke={stroke}
                handleClick={carouselCounter}
              />
            </animated.div>
            <animated.div className="carousel-slider" style={carouselSpring}>
              {/* Carousel images */}
              {imgSprings.map((prop, i) => (
                <Fragment key={`${i}-fragment`}>
                  <animated.div className="projects-container">
                    <AnimatedIcon
                      name="desktop-template"
                      stroke={stroke}
                      style={prop}
                    />
                    <AnimatedIcon
                      name="mobile-template"
                      stroke={stroke}
                      style={prop}
                    />
                  </animated.div>
                  <animated.div className="text-container">
                    <animated.p style={prop}>{projectsData[i].text}</animated.p>
                  </animated.div>
                  {/* <animated.div
                    key={`slide-${i}-img-container`}
                    className="image-container"
                    style={prop}
                  >
                    <animated.img
                      key={i}
                      id={`slide-${projectsData[i].id}`}
                      src={`${projectsData[i].src}`}
                      // style={prop}
                    ></animated.img>
                  </animated.div>
                  <animated.div
                    key={`slide-${i}-text-container`}
                    className="text-container"
                    style={prop}
                  >
                    <animated.p key={`slide-${i}-text`}>
                      {projectsData[i].text}
                    </animated.p>
                  </animated.div> */}
                </Fragment>
              ))}
            </animated.div>
            <animated.div
              className="arrow-container"
              id="arrow-container-2"
              style={{
                opacity: carouselSpring.opacity,
                width:
                  index === `${sectionData.name}`
                    ? carouselSpring.width.interpolate({
                        range: [0, 0.1, 1],
                        output: ["0vw", "10vw", "10vw"],
                      })
                    : carouselSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "0vw", "10vw"],
                      }),
                height:
                  index === `${sectionData.name}`
                    ? carouselSpring.height.interpolate({
                        range: [0, 0.1, 1],
                        output: ["0%", "15%", "15%"],
                      })
                    : carouselSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0%", "0%", "15%"],
                      }),
              }}
            >
              <AnimatedIcon
                name="next-arrow"
                stroke={stroke}
                handleClick={carouselCounter}
              />
            </animated.div>
          </Fragment>
        ) : (
          <span style={{ display: "none" }}></span>
        )}
      </animated.div>
    </animated.div>
  );
};

export default ProjectsToggle;
