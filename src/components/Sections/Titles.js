import React from "react";

import "../../styles/css/Sections/Titles.css";

const Titles = () => {
  return (
    <section className="titles-section">
      <div className="title-text titles-title">
        <p>William Davis</p>
      </div>
      <div>{/* Logo goes here */}</div>
      <div className="title-text titles-title">
        <p>Web Developer</p>
      </div>
      <div>{/* Back arrow goes here */}</div>
    </section>
  );
};

export default Titles;
