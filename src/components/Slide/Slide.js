import React from "react";
import "./Slide.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slideImages = ["movie1.jfif", "movie2.jfif", "movie3.jfif"];

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
      <Slider {...settings}>
          <div className="each-slide">
              <img src={slideImages[0]} />
        </div>
            <div className="each-slide">

              <img src={slideImages[1]} />
        </div>
        <div className="each-slide">
              <img src={slideImages[2]} />
        </div>
      </Slider>
  );
};

export default Slideshow;
