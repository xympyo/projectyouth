import React, { Component } from "react";

import Header from "../parts/Header";
import CatchphraseWithImage from "../parts/CatchphraseWithImage";
import LatestEvents from "../parts/LatestEvents";
import eventsPageData from "../json/eventsPage.json"; // Corrected import
import HorizontalDivider from "../parts/HorizontalOrDivider";
import InstagramAds from "../parts/InstagramAds";
import TetrisImageBackground from "../parts/TetrisImageBackground";
import FooterInformation from "../parts/FooterInformation";
import FooterHorizontalDivider from "../parts/FooterHorizontalDivider";
import FooterCopyrightSection from "../parts/FooterCopyrightSection";


export default class LandingPage extends Component {
  componentDidMount() {
    document.title = "Youth GBI Oasis | Our Latest Events"; // Corrected the window.title to document.title
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
  render() {
    return (
      <>
        <div>
          <Header />
          <CatchphraseWithImage data={eventsPageData.imageUrls} />
          <LatestEvents data={eventsPageData.latestEvents} />
          <HorizontalDivider />
          <InstagramAds />
          <TetrisImageBackground />
          <FooterInformation />
          <FooterHorizontalDivider />
          <FooterCopyrightSection />
        </div>
      </>
    );
  }
}
