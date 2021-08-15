import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import "./Login.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div
      className="login-background"
      style={{
        backgroundImage: `url(${
          process.env.REACT_APP_PUBLIC_URL + "/landingpage-dark.jpg"
        })`,
      }}
    >
      <div className="login-container">
        <form>
          <h1>User Log in</h1>
          <div className="inset">
            <p>
              <label for="email">EMAIL ADDRESS</label>
              <input
                type="text"
                name="email"
                id="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
            </p>
            <p>
              <label for="password">PASSWORD</label>
              <input
                type="password"
                name="password"
                id="password"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                required
              />
            </p>
            <p>
              <input type="checkbox" name="remember" id="remember" required />
              <label for="remember">Remember me for 14 days</label>
            </p>
          </div>
          <p className="p-container">
            <span>Forgot password ?</span>
            <input type="submit" name="go" id="go" value="Log in" />
          </p>
          <p className="p-container">
            <center>
              Dont have an account?
              <Link to="/signup"> Sign Up</Link>
            </center>
          </p>
        </form>
      </div>
    </div>
  );
};

export default App;
