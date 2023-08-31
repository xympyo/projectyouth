import React from "react";

import { Fade } from "react-reveal";

export default function CatchphraseWithImage({ data }) {
  const leaderReview = data[0].leaderReview; // Access leaderReview from the data prop
  return (
    <Fade>
      <div className="container">
        <div className="catchphrasewithimage-container">
          <img
            className="catchphrasewithimage-image"
            src={leaderReview}
            alt="Bringing smile, one to another."
          />
          <div className="catchphrasewithimage-text">
            <h1 className="catchphrase-text">
              Bringing <span className="catchphrase-primary">smile</span>,<br />
              <span className="catchphrase-primary"> one</span> to
              <span className="catchphrase-primary"> another</span>.
            </h1>
          </div>
        </div>
      </div>
    </Fade>
  );
}
