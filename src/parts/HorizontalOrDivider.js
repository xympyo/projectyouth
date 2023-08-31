import React from "react";

import { Fade } from "react-reveal";

export default function HorizontalOrDivider() {
  return (
    <Fade bottom>
      <div className="horizontal-divider-container">
        <h1 className="horizontal-divider-container-text">OR</h1>
      </div>
    </Fade>
  );
}
