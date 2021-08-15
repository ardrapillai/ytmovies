import React from "react";
import "./Slide.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slideImages = [
  "image/kong.jpg",
  "image/sher.jpeg",
  "image/war.jpg",
  "image/army.jpg",
  "movie3.jfif",
];

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5%",
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>
      <div className="each-slide">
        <div className="each-slide-img-container">
          <img src={slideImages[0]} />
          <div className="each-slide-shade"></div>
        </div>
      </div>
      <div className="each-slide">
        <div className="each-slide-img-container">
          <img src={slideImages[1]} />
        </div>
      </div>
      <div className="each-slide">
        <div className="each-slide-img-container">
          <img src={slideImages[2]} />
        </div>
      </div>
    </Slider>
  );
};

export default Slideshow;
