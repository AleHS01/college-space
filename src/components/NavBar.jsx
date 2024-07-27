// src/components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src="src/assets/logo-only.png" alt="" className="logo-image" />
        <h2 className="logo-text">CollegeSpace</h2>
      </Link>
      <div className="nav-items">
        <a href="">
          <img src="src/assets/instagram.png" alt="" />
        </a>
        <a href="">
          <img src="src/assets/linkedin.png" alt="" />
        </a>
        <Link to="/about">About Us</Link>
        <Link to="/login">Login</Link>
        <a href="#signup-form" className="signup-btn">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default NavBar;
