import React, { Component } from "react";
import Header from "../parts/Header";
import Catchphrase from "../parts/Catchphrase";
import TetrisImageBackground from "../parts/TetrisImageBackground";
import FooterInformation from "../parts/FooterInformation";
import FooterHorizontalDivider from "../parts/FooterHorizontalDivider";
import FooterCopyrightSection from "../parts/FooterCopyrightSection";
import ResourceCarousel from "../parts/ResourcesCarousel";

export default class ResourcesPage extends Component {
  componentDidMount() {
    document.title = "Youth GBI Oasis | Resources";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
  render() {
    return (
      <div>
        <Header />
        <ResourceCarousel />
        <Catchphrase />
        <TetrisImageBackground />
        <FooterInformation />
        <FooterHorizontalDivider />
        <FooterCopyrightSection />
      </div>
    );
  }
}
