import React, { useState,useEffect } from "react";

import  SearchBar from "../../components/SearchBar/SearchBar"

import  VideoList from "../../components/VideoList/VideoList"

import  VideoDetail  from "../../components/VideoDetail/VideoDetail"

import { useHistory } from "react-router-dom";

import "./Kids.css"

import Slide from "../../components/Slide/Slide";
const API_KEY = process.env.REACT_APP_API_KEY;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const baseURL='https://www.googleapis.com/youtube/v3/';
const SEARCH_API=baseURL+"search?part=snippet&maxResults=5&key="+YOUTUBE_API_KEY+"&q="


const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState({ id: {}, snippet: {} });

    let history = useHistory();

  useEffect(async () => {
    getMovies(SEARCH_API+"kids");
  }, []);

    //"search?part=snippet&maxResults=5&key="+API_KEY+"&q="+searchTerm

    const getMovies = (API) => {
        let dataBack;

        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                const { items: videos  } = data;
                setVideos(videos);
                setSelectedVideo(videos[0]);
            });
    };


    return (
        <div className="kids-container">
         <div className="kids-banner">
              <Slide />
            <div className="kids-search-bar">
                   <SearchBar onSubmit={handleSubmit} />
        </div>
 
            </div>
             <div className="kids-video-list">
                <VideoList videos={videos} onVideoSelect={userSelect} />
             </div>
        </div>
                                                    );

    async function handleSubmit(searchTerm) {
        //"search?part=snippet&maxResults=5&key="+API_KEY+"&q="+searchTerm
        // getMovies(SEARCH_API + searchTerm);

        history.push("/Playback/"+searchTerm);
    }
    function userSelect(video){
        //setSelectedVideo(video);
        history.push("/Playback/"+video.id.videoId);
    }
}

export default App;
