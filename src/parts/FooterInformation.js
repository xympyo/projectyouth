import React from "react";
import Fade from "react-reveal/Fade";

import LogoPlaceholder from "../assets/images/logoPlaceholder.svg";
import LocationIcon from "../assets/images/locationIcon.svg";

export default function FooterInformation() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="col-4"></div>
      <div className="col">
        <div className="youthinformation-container">
          <Fade bottom>
            <img
              className="youthinformation-logo"
              src={LogoPlaceholder}
              alt="Youth GBI Oasis Logo"
            ></img>
          </Fade>
          <div className="youthinformation-info-container">
            <Fade bottom>
              <h2 className="youthinformation-header">
                Youth GBI Oasis <br />
                service start at 7 PM every Saturday.
              </h2>
            </Fade>
            <Fade bottom cascade>
              <a
                className="youthinformation-location"
                href="https://www.google.com/maps/dir/-6.161072,106.5851485/gbi+oasis/@-6.1607352,106.5824696,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e69fff7bed5473b:0x8e58a024a6ec2b2a!2m2!1d106.5841681!2d-6.1601749"
                target="_blank"
                rel="noreferrer"
              >
                <img src={LocationIcon} alt="Location"></img>
                <p className="youthinformation-text">
                  at Jl. Villa Tomang Baru No.6-9, Kuta Jaya <br />
                  Kec. Ps. Kemis, Kabupaten Tangerang, Banten 15560
                </p>
              </a>
            </Fade>
          </div>
        </div>
      </div>
      <div className="col-4"></div>
    </div>
  );
}
