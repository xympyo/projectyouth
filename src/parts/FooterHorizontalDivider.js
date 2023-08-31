import React from "react";
import Fade from "react-reveal/Fade";

export default function FooterHorizontalDivider() {
  return (
    <>
      <div className="container footer-horizontaldivider-container">
        <Fade>
          <hr className="footer-horizontaldivider"></hr>
        </Fade>
      </div>
    </>
  );
}
