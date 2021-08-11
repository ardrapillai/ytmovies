import React from "react";

import VideoItemPlayback from "../VideoItemPlayback/VideoItemPlayback";
import "./VideoListPlayback.css";

const VideoListPlayback = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map((video) => (
    <VideoItemPlayback
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return <div className="VideoListPlayback-container">{listOfVideos}</div>;
};

export default VideoListPlayback;
