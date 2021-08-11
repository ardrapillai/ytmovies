import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import VideoItem from "../VideoItem/VideoItem";
import "./VideoListHome.css";
const VideoListHome = ({ videos, onVideoSelect }) => {
  const style = {
    textAlign: "center",
    background: "teal",
    padding: "50px 0",
    fontSize: "30px",
  };

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: "10%",
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const listOfVideos = videos.map((video) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <div className="VideoListHome-container">
      <Slider {...settings}>{listOfVideos}</Slider>
    </div>
  );
};

export default VideoListHome;
