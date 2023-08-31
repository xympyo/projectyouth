import React from "react";

import Fade from "react-reveal/Fade";

export default function AboutUsHeroSection({ data }) {
  const heroSection_url = data.imageUrls[0].heroSection_url;
  const historyImg1 = data.imageUrls[1].historyImg1;
  const historyImg2 = data.imageUrls[2].historyImg2;

  return (
    <div className="container">
      <Fade bottom>
        <div className="aboutusherosection-container">
          {/* Use `heroSection_url` as the `src` to display the image */}
          <img src={heroSection_url} alt="About Us Iamges" className="imagedv4" />
          <h1 className="aboutusherosection-header">Our History</h1>
        </div>
      </Fade>

      <div className="aboutusherosection-history-container">
        <div className="aboutusherosection-history-first">
          <Fade left>
            <img src={historyImg1} alt="Our Church Leader" className="imagedv4" />
            <p className="aboutusherosection-history-text">
              Youth GBI Oasis is a GBI Oasis ministry that is created on 2013,
              and is going active for 10 years, actively guiding Youth's to find
              a reason to live for tomorrow.
            </p>
          </Fade>
        </div>
        <div className="aboutusherosection-history-second">
          <Fade right>
            <img src={historyImg2} alt="Our Retreat" className="imagedv4" />
            <p className="aboutusherosection-history-text">
              Our Youth has a total of 100+ members which most of us spread to
              worshipping God in various smaller Ministries, such as Music
              Ministry, Usher Ministry, Dance Ministry and Multimedia Ministry
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}
