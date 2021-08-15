import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import "./LandingPage.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div
      className="landingPage-container"
      style={{
        backgroundImage: `url(${
          process.env.REACT_APP_PUBLIC_URL + "/landingpage.jpg"
        })`,
      }}
    >
      <div className="landingPage-overlay">
        <Link to="/signup">
          <div className="landingPage-singup">Sign Up</div>
        </Link>
        <div className="landingPage-content">
          <h1>
            <center>Welcome to Cinque</center>
          </h1>
          <h2>
            Join Cinque to watch the latest movies,
            <br /> TV shows, Sports and news
          </h2>
          <Link to="/login">
            <div className="landingPage-loginButton">Login</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
