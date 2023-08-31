import React from "react";
import { useLocation } from "react-router-dom";
import Fade from "react-reveal/Fade";

import BrandIcon from "./BrandIcon";
import Button from "../elements/Button";

export default function Header() {
  const location = useLocation();

  const getNavLinkClass = (path) => {
    return location.pathname === path ? " active" : "";
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <nav className="navbar nav-expand-lg navbar-light bg-transparent">
      <Fade>
        <div className="container">
          <div className="navbar-brand">
            <BrandIcon />
          </div>
          <div className="navbar-container bg-transparent">
            <ul className="navbar navbar-nav d-flex flex-row">
              <li className={`navbtn nav-button${getNavLinkClass("/about")}`}>
                <Button className="nav-link" type="link" href="/about">
                  About Us
                </Button>
              </li>
              <li className={`navbtn nav-button${getNavLinkClass("/events")}`}>
                <Button className="nav-link" type="link" href="/events">
                  Events
                </Button>
              </li>
              <li
                className={`navbtn nav-button${getNavLinkClass("/resources")}`}
              >
                <Button className="nav-link" type="link" href="/resources">
                  Resources
                </Button>
              </li>
            </ul>
          </div>
          <button
            type="button"
            className="contact-us-button"
            onClick={() =>
              openInNewTab("https://www.instagram.com/youthgbioasis/")
            }
          >
            Contact Us
          </button>
        </div>
      </Fade>
    </nav>
  );
}
