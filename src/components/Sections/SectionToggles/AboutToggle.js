import React, { useState, useRef, useEffect } from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../../Icon/IconIndex";

const AnimatedIcon = animated(Icon);

import "../../../styles/css/Sections/About.css";

const useComponentWillMount = (func) => {
  const willMount = useRef(true);

  if (willMount.current) {
    func();
  }

  willMount.current = false;
};

const AboutToggle = ({ index, sectionData, mVP, tVP }) => {
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
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, []);

  const { opacity, width, height, ...toggledSection } = useSpring({
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
              opacity: index === `${sectionData.name}` ? 1 : 0,
              width: index === `${sectionData.name}` ? "100%" : "0%",
              height: index === `${sectionData.name}` ? "100%" : "0%",
            },
          ],
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
    },
  });

  const portraitContainerSpring = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    width:
      (index === `${sectionData.name}`) & mVP
        ? "100%"
        : (index === `${sectionData.name}`) & tVP
        ? "100%"
        : (index === `${sectionData.name}`) &
          (windowWidth > 500) &
          (windowWidth < 841)
        ? "100%"
        : index === `${sectionData.name}`
        ? "35%"
        : "0%",
    from: {
      opacity: 0,
      width: "0%",
    },
  });

  const iconsSpring = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    width: index === `${sectionData.name}` ? 1 : 0,
    height: index === `${sectionData.name}` ? 1 : 0,
    from: {
      opacity: 0,
      width: 0,
      height: 0,
    },
  });

  const iconsMobileSpring = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    width: index === `${sectionData.name}` ? "9vw" : "0vw",
    height: index === `${sectionData.name}` ? "9vw" : "0vw",
    from: {
      opacity: 0,
      width: "0vw",
      height: "0vw",
    },
  });

  const textSectionSpring = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    pointerEvents: index === `${sectionData.name}` ? "auto" : "inherit",
    from: {
      opacity: 0,
      pointerEvents: "inherit",
    },
  });

  return (
    <animated.div
      id="about-container"
      style={{ opacity, width, height, ...toggledSection }}
    >
      <animated.div id="portrait-container" style={portraitContainerSpring}>
        <AnimatedIcon
          name="selfie"
          fill="#4A1E07"
          style={
            index === `${sectionData.name}`
              ? {
                  opacity: iconsSpring.opacity.interpolate({
                    range: [0, 0.5, 1],
                    output: [0, 1, 1],
                  }),
                }
              : {
                  opacity: iconsSpring.opacity.interpolate({
                    range: [0, 0.5, 1],
                    output: [0, 0, 1],
                  }),
                }
          }
        />
        <animated.div
          id="skills-container"
          style={{ opacity, width, height, ...toggledSection }}
        >
          <animated.div className="row" style={{ opacity, ...toggledSection }}>
            <AnimatedIcon
              name="html"
              className="skill-icon"
              fill="#4A1E07"
              style={
                !mVP & (index === `${sectionData.name}`)
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "3vw", "6vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "3vw", "6vw"],
                      }),
                    }
                  : !mVP & (index !== `${sectionData.name}`)
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 0, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "6vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "6vw"],
                      }),
                    }
                  : iconsMobileSpring
              }
            />
            <AnimatedIcon
              name="css"
              className="skill-icon"
              fill="#4A1E07"
              style={
                !mVP & (index === `${sectionData.name}`)
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "3vw", "6vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "3vw", "6vw"],
                      }),
                    }
                  : !mVP & (index !== `${sectionData.name}`)
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 0, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "6vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "6vw"],
                      }),
                    }
                  : iconsMobileSpring
              }
            />
            <AnimatedIcon
              name="javascript"
              className="skill-icon"
              fill="#4A1E07"
              style={
                !mVP & (index === `${sectionData.name}`)
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "3vw", "6vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "3vw", "6vw"],
                      }),
                    }
                  : !mVP & (index !== `${sectionData.name}`)
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 0, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "6vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "6vw"],
                      }),
                    }
                  : iconsMobileSpring
              }
            />
          </animated.div>
          <animated.div className="row" style={{ opacity, ...toggledSection }}>
            <AnimatedIcon
              name="react"
              className="skill-icon"
              fill="#4A1E07"
              style={
                !mVP & (index === `${sectionData.name}`)
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "3vw", "6vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "3vw", "6vw"],
                      }),
                    }
                  : !mVP & (index !== `${sectionData.name}`)
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 0, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "6vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "6vw"],
                      }),
                    }
                  : iconsMobileSpring
              }
            />
            <AnimatedIcon
              name="node"
              className="skill-icon"
              fill="#4A1E07"
              style={
                !mVP & (index === `${sectionData.name}`)
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "3vw", "6vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "3vw", "6vw"],
                      }),
                    }
                  : !mVP & (index !== `${sectionData.name}`)
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 0, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "6vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "6vw"],
                      }),
                    }
                  : iconsMobileSpring
              }
            />
            <AnimatedIcon
              name="python"
              className="skill-icon"
              fill="#4A1E07"
              style={
                !mVP & (index === `${sectionData.name}`)
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "3vw", "6vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "3vw", "6vw"],
                      }),
                    }
                  : !mVP & (index !== `${sectionData.name}`)
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 0, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "6vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "6vw"],
                      }),
                    }
                  : iconsMobileSpring
              }
            />
          </animated.div>
        </animated.div>
      </animated.div>
      <animated.div
        id="about-text-container"
        style={{
          opacity: textSectionSpring.opacity.interpolate({
            range: [0, 0.9, 1],
            output: [0, 0, 1],
          }),
          pointerEvents: textSectionSpring.pointerEvents,
        }}
      >
        <animated.p style={{ opacity, ...toggledSection }}>
          Technology has been a passion of mine from a young age. In 2019, I
          completed a 4-year degree in Sustainable Food & Farming from UMass
          Amherst. After leaving college to find few jobs in that field, I
          became determined to expand my skillset without becoming further
          roiled in debt. I began investing the majority of my time away from
          work into learning how to code.
        </animated.p>
        <animated.p style={{ opacity, ...toggledSection }}>
          I practiced by creating websites and apps from tutorials, prompts, and
          my imagination. Since then, I've been pursuing an education in web
          development thanks to a wealth of knowledge available both online and
          in the developer community.
        </animated.p>
        <animated.p style={{ opacity, ...toggledSection }}>
          Specializing in the Front End (particularly HTML, CSS, JavaScript, and
          React), I aim to deliver seamless user experiences on the web.
          Nowadays, when not coding, I research nutrition, walk in the woods,
          and play with robotics and automation on a Raspberry Pi.
        </animated.p>
      </animated.div>
    </animated.div>
  );
};

export default AboutToggle;
