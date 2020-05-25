import React, { useEffect } from "react";
import "./landing-screen-styles.scss";
import logo from "../../assets/connectio-logo.png";
import lottie from "lottie-web";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "../../components/login/login-component";
import Register from "../../components/register/register-component";

const LandingScreen = ({ activeScreen }) => {
  useEffect(() => {
    //load lottie animation
    lottie.loadAnimation({
      container: document.getElementById("animation"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://assets4.lottiefiles.com/private_files/lf30_rXyqXj.json",
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="landing-container">
        <div className="placeholder">
          {/* container for lottie animation */}
          <div id="animation" />
        </div>

        <div className="login-register">
          {/* container for login/register form */}
          <img
            src={logo}
            className="logo"
            alt="logo"
            style={{ cursor: "pointer" }}
          />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default LandingScreen;
