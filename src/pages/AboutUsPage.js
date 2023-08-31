import React, { Component } from "react";

import Header from "../parts/Header";
import AboutUsHeroSection from "../parts/AboutUsHeroSection";
import AboutUsOverview from "../parts/AboutUsOverview";
import Review from "../parts/Review";
import Catchphrase from "../parts/Catchphrase";
import TetrisImageBackground from "../parts/TetrisImageBackground";
import FooterInformation from "../parts/FooterInformation";
import FooterHorizontalDivider from "../parts/FooterHorizontalDivider";
import FooterCopyrightSection from "../parts/FooterCopyrightSection";

export default class AboutUsPage extends Component {
  componentDidMount() {
    document.title = "Youth GBI Oasis | About Us";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
  render() {
    // Assuming you have the `aboutUsData` object imported correctly
    const aboutUsData = require("../json/aboutUsPage.json");

    return (
      <div>
        <Header />
        {/* Pass the `aboutUsData` object as the `data` prop */}
        <AboutUsHeroSection data={aboutUsData} />
        <AboutUsOverview data={aboutUsData} />
        <Review data={aboutUsData} />
        <Catchphrase />
        <TetrisImageBackground />
        <FooterInformation />
        <FooterHorizontalDivider />
        <FooterCopyrightSection />
      </div>
    );
  }
}
