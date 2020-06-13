import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

import cover from "../../../shared/images/cover.png";
import unrealesed_cover from "../../../shared/images/unreleased_cover.png";
import cover_1 from "../../../shared/images/cover-1.png";

export const PlaySlider: React.FC = () => {
  const configuration = {
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]

  };
  return (
    <Slider {...configuration}>
      <div className="play-slider__element">
        <img src={cover} alt="" />
      </div>
      <div className="play-slider__element">
        <img src={unrealesed_cover} alt="" />
      </div>
      <div className="play-slider__element">
        <img src={cover_1} alt="" />
      </div>
    </Slider>
  );
};
