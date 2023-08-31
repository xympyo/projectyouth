import React from "react";

import { Fade } from "react-reveal";

import InstagramIcon from "../assets/images/instagramIcon.svg";

export default function InstagramAds() {
  return (
    <div className="instagram-ads-container">
      <div className="instagram-ads-content">
        <Fade left>
          <img
            alt="Instagram Icon"
            src={InstagramIcon}
            className="ig-icon"
          ></img>
        </Fade>
        <Fade right cascade>
          <div className="instagram-ads-container-text">
            <h1 className="instagram-ads-text">
              See more on our
              <br /> Instagram Account
            </h1>
            <p className="instagram-ads-account">@youthgbioasis</p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
