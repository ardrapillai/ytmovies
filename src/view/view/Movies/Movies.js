import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movie from "./Movie.js"
import "./Movies.css"
const API_KEY = process.env.REACT_APP_API_KEY;
const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;


const RECOMENDATION_API =
  "https://api.themoviedb.org/3/discover/movie?api_key="+API_KEY+"&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";

/*const SEARCH_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key="+YOUTUBE_API_KEY+"&q="*/
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?api_key="+API_KEY+"&query= ";

function Movies() {
    const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(async () => {
    getMovies(RECOMENDATION_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

    return (
      <div className="movies-container">
        <div className="movies-banner">

          <form onSubmit={handleOnSubmit}>
            <input
              className="movies-search"
              type="search"
              placeholder="search..."
              value={searchTerm}
              onChange={handleOnChange}
            />
          </form>

	    <img
            src="https://images.unsplash.com/photo-1585951237318-9ea5e175b891?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bW92aWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
            alt="img"
          />
        </div>
            <div className="movies-movie-container">
          {movies.length > 0 &&
            movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
      </div>
    );


}

export default Movies;
