import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
      <div className="video-item" onClick={() => onVideoSelect(video)} >
        <img style={{ marginRight: "20px" }} alt="thumbnail" src={video.snippet.thumbnails.medium.url} />
        <div className="video-item-title" >
          <b>{video.snippet.title}</b>
        </div>
      </div>
  );
}

export default VideoItem;
