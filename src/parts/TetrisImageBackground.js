import React from "react";

import TetrisImage from "../assets/images/tetris_images_background.svg";

export default function TetrisImageBackground() {
  return (
    <img
      className="tetrisbackground"
      src={TetrisImage}
      alt="Tetris Background"
    ></img>
  );
}
