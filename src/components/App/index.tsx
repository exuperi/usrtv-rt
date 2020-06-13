import React from "react";

import { Header } from "../Header";
import { Player } from "../Player";

import "./index.scss";

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__bg-image"></div>
      <div className="app__wrapper">
        <Header />
        <Player />
      </div>
    </div>
  );
};
