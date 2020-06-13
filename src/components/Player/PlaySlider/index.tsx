import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

export const PlaySlider: React.FC = () => {
  const settings = {
    centerMode: true,
    centerPadding: "90px",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div className="play-slider__element play-slider__element-1">
        <div className="play-slider__logo"></div>
      </div>
      <div className="play-slider__element play-slider__element-2">
        <div className="play-slider__logo"></div>
      </div>
      <div className="play-slider__element play-slider__element-3">
        <div className="play-slider__logo"></div>
      </div>
    </Slider>
  );
};
