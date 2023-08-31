import React from "react";

import { Fade } from "react-reveal";

export default function LatestEvents({ data }) {
  const latestEvents1 = data[0].latestEvents1; // Access leaderReview from the data prop
  const latestEvents2 = data[1].latestEvents2; // Access leaderReview from the data prop
  return (
    <div className="container latestEvents-container">
      <Fade>
        <div className="aboutuspage-events-header">
          <h1 className="aboutuspage-events-header-text">Our Latest Events</h1>
        </div>
      </Fade>
      <div className="aboutus-page-events-contents-container">
        <div className="aboutus-page-events-contents">
          <Fade left>
            <img
              alt="Latest Events 1"
              src={latestEvents1}
              className="imagedv4"
            ></img>
          </Fade>
          <Fade right cascade>
            <div className="aboutus-page-events-contents-text">
              <h1 className="latestevents-h1">
                Youth
                <br /> 2023 Retreat
              </h1>
              <p className="latestevents-name">"Fire Up"</p>
              <button type="button" className="btn">
                See More
              </button>
            </div>
          </Fade>
        </div>
        <div className="aboutus-page-events-contents">
          <Fade left>
            <img
              alt="Latest Events 1"
              src={latestEvents2}
              className="imagedv4"
            ></img>
          </Fade>
          <Fade right cascade>
            <div className="aboutus-page-events-contents-text">
              <h1 className="latestevents-h1">
                UNDVD
                <br /> Live Concert
              </h1>
              <p className="latestevents-name">GRATITUDE</p>
              <button type="button" className="btn">
                See More
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
