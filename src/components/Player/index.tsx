import React from "react";

import { PlaySlider } from "./PlaySlider";

import "./index.scss";

export const Player: React.FC = () => {
  return (
    <div className="player">
      <div className="player__slider">
        <PlaySlider />
      </div>
      <div className="player__title">
        <h4 className="player__playback-name">Self Concious</h4>
        <h6 className="player__artist">KANYE WEST</h6>
      </div>
      <div className="player__controls">
        <div className="player__controls-btn shuffle-btn"></div>
        <div className="player__controls-btn prev-btn"></div>
        <div className="player__controls-btn play-btn"></div>
        <div className="player__controls-btn next-btn"></div>
        <div className="player__controls-btn repeat-btn"></div>
      </div>
      <div className="player__playback-buffers">
        <div className="player__buffer">
          <div className="start-time">0.00</div>
          <div className="track">
            <div className="track-wide"></div>
          </div>
          <div className="end-time">3.27</div>
        </div>
        <div className="player__waveform-outer">
          <div className="player__waveform-track"></div>
        </div>
      </div>
    </div>
  );
};
