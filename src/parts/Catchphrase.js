import React from "react";
import Fade from "react-reveal/Fade";

export default function Catchphrase() {
  return (
    <div className="container">
      <div className="catchphrase-container">
        <Fade bottom>
          <p className="catchphrase-text">
            Bringing <span className="catchphrase-primary">smile</span>,
            <span className="catchphrase-primary"> one</span> to
            <span className="catchphrase-primary"> another</span>.
          </p>
        </Fade>
      </div>
    </div>
  );
}
