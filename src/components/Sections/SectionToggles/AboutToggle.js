import React from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../../Icon/IconIndex";

const AnimatedIcon = animated(Icon);

import "../../../styles/css/Sections/About.css";

const AboutToggle = ({ index, sectionData, mVP, tVP }) => {
  const { opacity, width, height, ...toggledProps } = useSpring({
    opacity: index === `${sectionData.name}` ? 1 : 0,
    width: index === `${sectionData.name}` ? "100%" : "0%",
    height: index === `${sectionData.name}` ? "100%" : "0%",
    from: {
      opacity: 0,
      width: "0%",
      height: "0%",
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
      style={{ opacity, width, height, ...toggledProps }}
    >
      <animated.div
        id="portrait-container"
        style={{ opacity, ...toggledProps }}
      >
        <AnimatedIcon
          name="selfie"
          fill="#4A1E07"
          style={{
            opacity: iconsSpring.opacity.interpolate({
              range: [0, 0.5, 1],
              output: [0, 1, 1],
            }),
          }}
        />
        <animated.div
          id="skills-container"
          style={{ opacity, ...toggledProps }}
        >
          <animated.div className="row" style={{ opacity, ...toggledProps }}>
            <AnimatedIcon
              name="html"
              className="skill-icon"
              fill="#4A1E07"
              style={
                !mVP
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "4vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "4vw"],
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
                !mVP
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "4vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "4vw"],
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
                !mVP
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "4vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "4vw"],
                      }),
                    }
                  : iconsMobileSpring
              }
            />
          </animated.div>
          <animated.div className="row" style={{ opacity, ...toggledProps }}>
            <AnimatedIcon
              name="react"
              className="skill-icon"
              fill="#4A1E07"
              style={
                !mVP
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "4vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "4vw"],
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
                !mVP
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "4vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "4vw"],
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
                !mVP
                  ? {
                      opacity: iconsSpring.opacity.interpolate({
                        range: [0, 0.5, 1],
                        output: [0, 1, 1],
                      }),
                      width: iconsSpring.width.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "4vw"],
                      }),
                      height: iconsSpring.height.interpolate({
                        range: [0, 0.9, 1],
                        output: ["0vw", "2vw", "4vw"],
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
        <animated.p style={{ opacity, ...toggledProps }}>
          Born and raised in a rural New England town, I've had a deep interest
          in technology, sustainable agriculture, and nutrition from a young
          age. My non-technological passions led me to attain a BS degree in
          Sustainable Food & Farming from UMass Amherst.
        </animated.p>
        <animated.p style={{ opacity, ...toggledProps }}>
          My love of technology was only surface-deep until the fall of 2019. I
          began doubling down on learning to code and create websites and apps
          that I had imagined, but knew not how to create. Since then, I've been
          pursuing an education in web development thanks to a wealth of
          knowledge available both online and in the developer community.
        </animated.p>
        <animated.p style={{ opacity, ...toggledProps }}>
          Specializing in the Front End (particularly HTML & CSS, React, and
          JavaScript), I deliver seamless user experiences in the form of
          ergonomic web applications. When not coding web apps, I enjoy
          tinkering with home automation, the 'Internet of Things', and robotics
          using Python on a Raspberry Pi.
        </animated.p>
      </animated.div>
    </animated.div>
  );
};

export default AboutToggle;
