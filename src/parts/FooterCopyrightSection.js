import React from "react";
import { Fade } from "react-reveal";

import GoogleIcon from "../assets/images/googleIcon.svg";
import TiktokIcon from "../assets/images/tiktokIcon.svg";
import YoutubeIcon from "../assets/images/youtubeIcon.svg";
import InstagramIcon from "../assets/images/instagramIcon.svg";

export default function FooterCopyrightSection() {
  return (
    <div className="container">
      <div className="footercopyrightsection-container">
        <Fade bottom>
          <p className="footercopyrightsection-text">
            &#169; 2023 Youth GBI Oasis, GBI Oasis
          </p>
        </Fade>
        <div className="footercopyrightsection-socialmedia-container">
          <Fade right cascade>
            <a
              className="footercopyrightsection-link"
              href="https://www.youtube.com/@gbioasiskotabumi"
              rel="noreferrer"
            >
              <img
                className="footercopyrightsection-icons"
                src={GoogleIcon}
                alt="Google Icon"
              ></img>
            </a>
            <a
              className="footercopyrightsection-link"
              href="https://www.tiktok.com/@youthgbioasis"
              rel="noreferrer"
            >
              <img
                className="footercopyrightsection-icons"
                src={TiktokIcon}
                alt="TikTok Icon"
              ></img>
            </a>
            <a
              className="footercopyrightsection-link"
              href="https://www.youtube.com/@gbioasiskotabumi"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footercopyrightsection-icons"
                src={YoutubeIcon}
                alt="YouTube Icon"
              ></img>
            </a>
            <a
              className="footercopyrightsection-link"
              href="https://www.instagram.com/youthgbioasis/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="footercopyrightsection-icons"
                src={InstagramIcon}
                alt="Instagram Icon"
              ></img>
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
}
