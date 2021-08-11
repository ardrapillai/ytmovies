import React, { useState, useEffect } from "react";

import SearchBar from "../../components/SearchBar/SearchBar";

import VideoListHome from "../../components/VideoListHome/VideoListHome";

import VideoDetail from "../../components/VideoDetail/VideoDetail";

import { useHistory } from "react-router-dom";

import "./Home.css";

import Slide from "../../components/Slide/Slide";

const API_KEY = process.env.REACT_APP_API_KEY;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const baseURL = "https://www.googleapis.com/youtube/v3/";
const SEARCH_API_POPULAR =
  baseURL +
  "videos?chart=mostPopular&key=" +
  YOUTUBE_API_KEY +
  "&part=snippet&maxResults=5";
const SEARCH_API_RECOMENTED =
  baseURL +
  "videos?chart=mostPopular&key=" +
  YOUTUBE_API_KEY +
  "&part=snippet&maxResults=5&regionCode=IN";
const SEARCH_API_MUSIC =
  baseURL +
  "videos?chart=mostPopular&key=" +
  YOUTUBE_API_KEY +
  "&part=snippet&maxResults=5&regionCode=IN";
const SEARCH_API_SPORTS =
  baseURL +
  "videos?chart=mostPopular&key=" +
  YOUTUBE_API_KEY +
  "&part=snippet&maxResults=5&regionCode=IN";
const SEARCH_API_NEWS =
  baseURL +
  "videos?chart=mostPopular&key=" +
  YOUTUBE_API_KEY +
  "&part=snippet&maxResults=5&regionCode=IN";

const App = () => {
  const [popular, setPopular] = useState([]);
  const [recomented, setRecomented] = useState([]);
  const [music, setMusic] = useState([]);
  const [sports, setSports] = useState([]);
  const [news, setNews] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

  let history = useHistory();

  useEffect(async () => {
    getMovies(SEARCH_API_POPULAR);
    getRecomented(SEARCH_API_RECOMENTED);
    getMusic(SEARCH_API_MUSIC);
    getSports(SEARCH_API_SPORTS);
    getNews(SEARCH_API_NEWS);
  }, []);

  //"search?part=snippet&maxResults=5&key="+API_KEY+"&q="+searchTerm

  const getMovies = (API) => {
    let dataBack;

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const { items: popular } = data;
        setPopular(popular);
        setSelectedVideo(popular[0]);
      });
  };
  const getRecomented = (API) => {
    let dataBack;

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const { items: recomented } = data;
        setRecomented(recomented);
        setSelectedVideo(recomented[0]);
      });
  };
  const getMusic = (API) => {
    let dataBack;

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const { items: music } = data;
        setMusic(music);
        setSelectedVideo(music[0]);
      });
  };
  const getSports = (API) => {
    let dataBack;

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const { items: sports } = data;
        setSports(sports);
        setSelectedVideo(sports[0]);
      });
  };
  const getNews = (API) => {
    let dataBack;

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const { items: news } = data;
        setNews(news);
        setSelectedVideo(news[0]);
      });
  };

  return (
    <div className="home-container">
      <div className="home-banner">
        <div className="home-search-bar">
          <SearchBar onSubmit={handleSubmit} />
        </div>
        <Slide />
      </div>
      <div className="home-divider">popular</div>
      <div className="home-video-list">
        <VideoListHome videos={popular} onVideoSelect={userSelect} />
      </div>

      <div className="home-divider">recomented</div>
      <div className="home-video-list">
        <VideoListHome videos={recomented} onVideoSelect={userSelect} />
      </div>

      <div className="home-divider">music</div>
      <div className="home-video-list">
        <VideoListHome videos={music} onVideoSelect={userSelect} />
      </div>

      <div className="home-divider">sports</div>
      <div className="home-video-list">
        <VideoListHome videos={sports} onVideoSelect={userSelect} />
      </div>

      <div className="home-divider">news</div>
      <div className="home-video-list">
        <VideoListHome videos={news} onVideoSelect={userSelect} />
      </div>
    </div>
  );

  async function handleSubmit(searchTerm) {
    //"search?part=snippet&maxResults=5&key="+API_KEY+"&q="+searchTerm
    // getMovies(SEARCH_API + searchTerm);

    history.push("/Playback/" + searchTerm);
  }
  function userSelect(video) {
    //setSelectedVideo(video);
    history.push("/Playback/" + video.id.videoId);
  }
};

export default App;
