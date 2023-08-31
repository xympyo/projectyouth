import React, { Component } from "react";

import Header from "../parts/Header";
import LandingPageHeroContent from "../parts/LandingPageHeroContent";
import LandingPageSecondSectionHeader from "../parts/LandingPageSecondSectionHeader";
import LandingPageSecondSectionContent from "../parts/LandingPageSecondSectionContent";
import Catchphrase from "../parts/Catchphrase";
import TetrisImageBackground from "../parts/TetrisImageBackground";
import FooterInformation from "../parts/FooterInformation";
import FooterHorizontalDivider from "../parts/FooterHorizontalDivider";
import FooterCopyrightSection from "../parts/FooterCopyrightSection";

import BibleVerse from "../json/landingPage.json"

export default class LandingPage extends Component {
  componentDidMount() {
    document.title = "Youth GBI Oasis";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
  render() {
    return (
      <>
        <div className="first-section">
          <Header />
          <LandingPageHeroContent />
        </div>
        <div className="second-section">
          <LandingPageSecondSectionHeader />
          <LandingPageSecondSectionContent
            data={BibleVerse}
          />
          <Catchphrase />
          <TetrisImageBackground />
          <FooterInformation />
          <FooterHorizontalDivider />
          <FooterCopyrightSection />
        </div>
      </>
    );
  }
}
