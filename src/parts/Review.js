import React from "react";

import Fade from "react-reveal/Fade";

export default function Review({ data }) {
  const reviewSection = data.imageUrls[4].leaderReview;
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-10">
          <div className="review-container">
            <Fade>
              <img src={reviewSection} alt="Our Review" className="imagedv4" />
              <div className="review-text-container">
                <p className="review-text">
                  <span className="review-quotation">"</span>
                  We focus on leading Youth's to find and develop their
                  potential so they can be useful with and without us, so they
                  can grow bigger and larger, with the help of God.
                  <span className="review-quotation">"</span>
                </p>
                <p className="review-text-source">Nefy Wahyulianto</p>
              </div>
            </Fade>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}
