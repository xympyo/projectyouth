import React from "react";
import Fade from "react-reveal/Fade";

export default function LandingPageHeroContent() {
  return (
    <div className="container hero-content-container">
      <Fade>
        <h1 className="hero-content-text">
          EMPOWERING YOUTH <br />
          <span className="hero-content-text span">TO</span>
          <br />
          DEVELOP THEIR SKILLS FURTHER
        </h1>
      </Fade>
    </div>
  );
}
