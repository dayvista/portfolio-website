import React, { useState, Fragment } from "react";
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

  const changeIndexWithRadioButton = (index) => {
    setCarouselIndex(index);
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
              width: "100%",
              height: "100%",
            },
            { opacity: 1 },
          ]
        : [
            {
              width: "0%",
              height: "0%",
              opacity: 0,
            },
          ],
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
    },
  });

  const carouselSprings = useSprings(
    projectsData.length,
    projectsData.map((project, i) => ({
      to:
        i === carouselIndex
          ? [
              { zIndex: i === carouselIndex ? 1 : -1 },
              {
                opacity: i === carouselIndex ? 1 : 0,
              },
            ]
          : [
              {
                zIndex: i === carouselIndex ? 1 : -1,
                opacity: i === carouselIndex ? 1 : 0,
              },
            ],
      from: {
        opacity: i === carouselIndex ? 1 : 0,
        zIndex: i === carouselIndex ? 1 : -1,
      },
      config: { duration: 600 },
    }))
  );

  const radioButtonSprings = useSprings(
    projectsData.length,
    projectsData.map((project, i) => ({
      opacity: i === carouselIndex ? 1 : 0,
      zIndex: i === carouselIndex ? 1 : 0,
      from: {
        opacity: i === carouselIndex ? 1 : 0,
        zIndex: i === carouselIndex ? 1 : 0,
      },
      config: { duration: 400 },
    }))
  );

  const projectContainerSpring = useSpring({
    width: index === `${sectionData.name}` ? "70%" : "0%",
    height: index === `${sectionData.name}` ? "35.22%" : "0%",
    from: {
      width: index === `${sectionData.name}` ? "70%" : "0%",
      height: index === `${sectionData.name}` ? "35.22%" : "0%",
    },
    config: { duration: 300 },
  });

  const desktopImageSpring = useSpring({
    width: index === `${sectionData.name}` ? "50%" : "0%",
    height: index === `${sectionData.name}` ? "100%" : "0%",
    from: {
      width: index === `${sectionData.name}` ? "50%" : "0%",
      height: index === `${sectionData.name}` ? "100%" : "0%",
    },
    config: { duration: 300 },
  });

  const mobileImageSpring = useSpring({
    width: index === `${sectionData.name}` ? "13.5%" : "0%",
    height: index === `${sectionData.name}` ? "100%" : "0%",
    from: {
      width: index === `${sectionData.name}` ? "13.5%" : "0%",
      height: index === `${sectionData.name}` ? "100%" : "0%",
    },
    config: { duration: 300 },
  });

  const textContainerSpring = useSpring({
    width: index === `${sectionData.name}` ? "70%" : "0%",
    height: index === `${sectionData.name}` ? "33.5%" : "0%",
    opacity: index === `${sectionData.name}` ? 1 : 0,
    from: {
      width: index === `${sectionData.name}` ? "70%" : "0%",
      height: index === `${sectionData.name}` ? "33.5%" : "0%",
      opacity: index === `${sectionData.name}` ? 1 : 0,
    },
    config: { duration: 300 },
  });

  const headerSpring = useSpring({
    fontSize: index === `${sectionData.name}` ? "1.75vw" : "0vw",
    from: {
      fontSize: index === `${sectionData.name}` ? "1.75vw" : "0vw",
    },
    config: { duration: 300 },
  });

  const textSpring = useSpring({
    fontSize: index === `${sectionData.name}` ? "1.5vw" : "0vw",
    from: {
      fontSize: index === `${sectionData.name}` ? "1.5vw" : "0vw",
    },
    config: { duration: 300 },
  });

  return (
    <animated.div
      id="projects-container"
      style={{ opacity, width, height, cursor, ...toggledProps }}
    >
      <animated.div
        className="carousel-container"
        style={{ opacity, width, height, ...toggledProps }}
      >
        {!mVP && !tVP ? (
          <Fragment>
            <animated.div className="carousel-slider" style={carouselSpring}>
              {/* Carousel */}
              <animated.div
                id="project-base-container"
                className="individual-project-container"
                style={projectContainerSpring}
              >
                <animated.img
                  id="base-desktop-image"
                  className="project-images-desktop"
                  src={projectsData[0].desktopSrc}
                  style={desktopImageSpring}
                />
                <animated.img
                  id="base-mobile-image"
                  className="project-images-mobile"
                  src={projectsData[0].mobileSrc}
                  style={mobileImageSpring}
                />
              </animated.div>
              {carouselSprings.map((prop, i) => (
                <Fragment key={i}>
                  <animated.div
                    key={`project-${i}-container`}
                    id={`project-${i}-container`}
                    className="individual-project-container"
                    style={
                      index === `${sectionData.name}`
                        ? prop
                        : projectContainerSpring
                    }
                  >
                    <animated.img
                      key={`project-${i}-image-desktop`}
                      id={`project-${i}-image-desktop`}
                      className="project-images-desktop"
                      src={projectsData[i].desktopSrc}
                      style={desktopImageSpring}
                    />
                    <animated.img
                      key={`project-${i}-image-mobile`}
                      id={`project-${i}-image-mobile`}
                      className="project-images-mobile"
                      src={projectsData[i].mobileSrc}
                      style={mobileImageSpring}
                    />
                  </animated.div>
                  <animated.div
                    key={`project-${i}-text-container`}
                    id={`project-${i}-text-container`}
                    className="text-container"
                    style={textContainerSpring}
                  >
                    <animated.h1
                      key={`project-${i}-header`}
                      id={`project-${i}-header`}
                      style={
                        index === `${sectionData.name}` ? prop : headerSpring
                      }
                    >
                      {projectsData[i].header}
                    </animated.h1>
                    <animated.p
                      key={`project-${i}-skills-text`}
                      id={`project-${i}-skills-text`}
                      style={
                        index === `${sectionData.name}` ? prop : textSpring
                      }
                    >
                      {projectsData[i].skillsText}
                    </animated.p>
                    <animated.p
                      key={`project-${i}-about-text`}
                      id={`project-${i}-about-text`}
                      style={
                        index === `${sectionData.name}` ? prop : textSpring
                      }
                    >
                      {projectsData[i].aboutText}
                    </animated.p>
                  </animated.div>
                </Fragment>
              ))}
            </animated.div>
            <div className="counter-container">
              <animated.div
                className="arrow-container"
                id="arrow-container-1"
                style={{
                  opacity: carouselSpring.opacity,
                  width:
                    index === `${sectionData.name}`
                      ? carouselSpring.width.interpolate({
                          range: [0, 0.1, 1],
                          output: ["0vw", "9.26vw", "9.26vw"],
                        })
                      : carouselSpring.width.interpolate({
                          range: [0, 0.9, 1],
                          output: ["0vw", "0vw", "9.26vw"],
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
                <Icon
                  name="back-arrow"
                  key="back-arrow"
                  stroke={stroke}
                  handleClick={carouselCounter}
                />
              </animated.div>
              <animated.div
                className="radio-button-container"
                style={{
                  opacity: carouselSpring.opacity,
                  width:
                    index === `${sectionData.name}`
                      ? carouselSpring.width.interpolate({
                          range: [0, 0.1, 1],
                          output: ["0vw", "9.26vw", "9.26vw"],
                        })
                      : carouselSpring.width.interpolate({
                          range: [0, 0.9, 1],
                          output: ["0vw", "0vw", "9.26vw"],
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
                {radioButtonSprings.map((prop, i) =>
                  i === carouselIndex ? (
                    <AnimatedIcon
                      key={`radio-button-${i}`}
                      id={`radio-button-${i}`}
                      name="radio-button-on"
                      stroke={stroke}
                      style={prop}
                    />
                  ) : (
                    <AnimatedIcon
                      key={`radio-button-${i}`}
                      id={`radio-button-${i}`}
                      name="radio-button-off"
                      stroke={stroke}
                      style={prop}
                      changeIndex={changeIndexWithRadioButton}
                      index={i}
                    />
                  )
                )}
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
                          output: ["0vw", "9.26vw", "9.26vw"],
                        })
                      : carouselSpring.width.interpolate({
                          range: [0, 0.9, 1],
                          output: ["0vw", "0vw", "9.26vw"],
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
                <Icon
                  name="next-arrow"
                  stroke={stroke}
                  handleClick={carouselCounter}
                />
              </animated.div>
            </div>
          </Fragment>
        ) : (
          <span style={{ display: "none" }}></span>
        )}
      </animated.div>
    </animated.div>
  );
};

export default ProjectsToggle;
