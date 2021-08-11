import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "./view/Home/Home.js";
import Kids from "./view/Kids/Kids.js";
import Movies from "./view/Movies/Movies.js";
import Tv from "./view/Tv/Tv.js";
import Playback from "./view/Playback/Playback.js";
import Login from "./view/Login/Login.js";
import Signup from "./view/Signup/Signup.js";
import "./components/Navbar.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <div>
            <nav>
              <Link to="/wel">
                <img src={logo} width="50px" height="50px" />
              </Link>
              <div className="top-nav-container">
                <NavLink
                  className="top-nav-option"
                  activeClassName="current"
                  exact
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="top-nav-option"
                  activeClassName="current"
                  to="/movies"
                >
                  Movies
                </NavLink>
                <NavLink
                  className="top-nav-option"
                  activeClassName="current"
                  to="/tv"
                >
                  Tv
                </NavLink>
                <NavLink
                  className="top-nav-option"
                  activeClassName="current"
                  to="/kids"
                >
                  Kids
                </NavLink>
              </div>
            </nav>
          </div>
        </header>
        <Switch>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/tv">
            <Tv />
          </Route>
          <Route path="/kids">
            <Kids />
          </Route>
          <Route path="/Playback/:vid" component={Playback} />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
