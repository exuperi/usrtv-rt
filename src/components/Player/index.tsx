import React from "react";

import { PlaySlider } from "./PlaySlider";

import "./index.scss";

export const Player: React.FC = () => {
  return (
    <div className="player">
      <div className="player__slider">
        <PlaySlider />
      </div>
      <div className="player__title"></div>
      <div className="player__controls"></div>
      <div className="player__playback-buffers"></div>
    </div>
  );
};
