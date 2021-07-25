import React, { useState, useEffect } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";

import VideoList from "../../components/VideoListPlayback/VideoListPlayback";

import VideoDetail from "../../components/VideoDetail/VideoDetail";
import "./Playback.css";
import { useParams } from "react-router-dom";
const API_KEY = process.env.REACT_APP_API_KEY;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const baseURL = "https://www.googleapis.com/youtube/v3/";
const SEARCH_API =
  baseURL + "search?part=snippet&maxResults=5&key=" + YOUTUBE_API_KEY + "&q=";

const App = (props) => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });
  const { vid } = useParams();
  //"search?part=snippet&maxResults=5&key="+API_KEY+"&q="+searchTerm

  useEffect(async () => {
    getMovies(SEARCH_API + vid);
  }, []);

  const getMovies = (API) => {
    let dataBack;

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const { items: videos } = data;
        setVideos(videos);
        setSelectedVideo(videos[0]);
      });
  };

  return (
    <div className="playback-container">
      <div className="playback-search-bar">
        <SearchBar onSubmit={handleSubmit} />
      </div>
      <div className="playback-video-details">
        <VideoDetail video={selectedVideo} />
      </div>
      <div className="playback-video-list">
        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
      </div>
    </div>
  );

  async function initSearch(searchTerm) {
    getMovies(SEARCH_API + searchTerm);
  }

  async function handleSubmit(searchTerm) {
    //"search?part=snippet&maxResults=5&key="+API_KEY+"&q="+searchTerm
    getMovies(SEARCH_API + searchTerm);
  }
};

export default App;
