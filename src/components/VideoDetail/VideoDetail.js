import React from "react";
import "./VideoDetail.css"
// Explain destructuring...
const VideoDetail = ({ video: { id: { videoId }, snippet: { title, channelTitle, description } } }) => {
    // TODO - Spinner
    if (!videoId) return <div>Loading...</div>;

    const videoSrc = `https://www.youtube.com/embed/${videoId}`;

    return (
        <React.Fragment>
            <div className="video-detail-video-container">
                <iframe
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    title="Video Player"
                    src={videoSrc}
                />
            </div>   
            <div className="video-detail-text-container">
                <div className="video-detail-title">
                    {title} - {channelTitle}
                 </div>
                <div className="video-detail-channel-title">
                    {channelTitle}
                    </div>
                <div className="video-detail-description">
                    {description}
                 </div>
             </div>
            </React.Fragment>
         );
}

export default VideoDetail;
