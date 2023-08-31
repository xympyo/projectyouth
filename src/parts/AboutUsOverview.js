import React from "react";

import Fade from "react-reveal/Fade";

export default function AboutUsOverview({ data }) {
  const aboutUsOverview = data.imageUrls[3].aboutUsOverview;
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="aboutusoverview-container">
            <Fade bottom>
              <img src={aboutUsOverview} alt="Our Photos" className="imagedv4" />
              <h3 className="aboutusoverview-text">
                a{" "}
                <span className="aboutusoverview-span">
                  Modern Youth Ministry
                </span>{" "}
                that{" "}
                <span className="aboutusoverview-span">focus on Youth’s </span>
                to pursue their talent{" "}
                <span className="aboutusoverview-span">
                  to be used anywhere
                </span>
                .
              </h3>
            </Fade>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
