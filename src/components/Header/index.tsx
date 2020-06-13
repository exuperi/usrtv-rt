import React from "react";

import back_ico from "../../shared/images/back_ico.svg";
import more_ico from "../../shared/images/more_ico.svg";

import "./index.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__left-side">
        <img src={back_ico} alt="Return back" />
      </div>
      <div className="header__center">
        ALBUM <br /> <span>Unreleased</span>
      </div>
      <div className="header__right-side">
        <img src={more_ico} alt="Show details" />
      </div>
    </header>
  );
};
