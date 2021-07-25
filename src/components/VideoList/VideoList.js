import React from "react";

import VideoItem from "../VideoItem/VideoItem";
import "./VideoList.css";
const VideoList = ({ videos, onVideoSelect }) => {
  const listOfVideos = videos.map(video => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));

  return (
    <div className="VideoList-container">
      {listOfVideos}
    </div>
  );
}

export default VideoList;
