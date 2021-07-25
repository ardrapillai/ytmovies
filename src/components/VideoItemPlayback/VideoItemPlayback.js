import React from "react";
import "./VideoItemPlayback.css";

const VideoItemPlayback = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item-playback" onClick={() => onVideoSelect(video)}>
      <img
        style={{ marginRight: "20px" }}
        alt="thumbnail"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="video-item-playback-title">
        <b>{video.snippet.title}</b>
      </div>
    </div>
  );
};

export default VideoItemPlayback;
