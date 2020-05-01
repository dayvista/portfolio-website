import React from "react";
import { animated, useSpring } from "react-spring";

import Icon from "../../Icon/IconIndex";

const AnimatedIcon = animated(Icon);

import "../../../styles/css/Sections/About.css";

const AboutToggle = ({ index, sectionData, mobileViewportPortrait }) => {
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
          style={{ opacity, ...toggledProps }}
        />
        <animated.div
          id="skills-container"
          style={{ opacity, ...toggledProps }}
        >
          <AnimatedIcon
            name="html"
            className="skill-icon"
            fill="#4A1E07"
            style={{ opacity, ...toggledProps }}
          />
          <AnimatedIcon
            name="css"
            className="skill-icon"
            fill="#4A1E07"
            style={{ opacity, ...toggledProps }}
          />
          <AnimatedIcon
            name="javascript"
            className="skill-icon"
            fill="#4A1E07"
            style={{ opacity, ...toggledProps }}
          />
          <AnimatedIcon
            name="react"
            className="skill-icon"
            fill="#4A1E07"
            style={{ opacity, ...toggledProps }}
          />
          <AnimatedIcon
            name="node"
            className="skill-icon"
            fill="#4A1E07"
            style={{ opacity, ...toggledProps }}
          />
          <AnimatedIcon
            name="python"
            className="skill-icon"
            fill="#4A1E07"
            style={{ opacity, ...toggledProps }}
          />
        </animated.div>
      </animated.div>
      <animated.div
        id="about-text-container"
        style={{ opacity, ...toggledProps }}
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
