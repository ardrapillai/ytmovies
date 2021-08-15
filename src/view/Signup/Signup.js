import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import "./Signup.css";

const App = () => {
  return (
    <div className="login-container">
      <form>
        <h1>User Sign Up</h1>
        <div className="inset">
          <p>
            <label for="name">NAME</label>
            <input type="text" name="name" id="name" required />
          </p>
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
            <label for="remember">Agree terms and conditions</label>
          </p>
        </div>
        <p className="p-container">
          <input type="submit" name="go" id="go" value="Sign Up" />
        </p>
      </form>
    </div>
  );
};

export default App;
