import React from "react";
import "../css/HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="col1">
        <div>
          <h1>CollegeSpace:</h1>
          <h2>Your college Application ally</h2>
          <p className="description">
            CollegeSpace is your comprehensive companion for managing the
            college application process. By consolidating all your deadlines and
            requirements into a clear timeline, CollegeSpace keeps you organized
            and focused on getting into your dream college. Whether managing
            multiple deadlines, strategizing application timing, or planning
            your essay writing schedule, CollegeSpace ensures you're always on
            track. Simplify your college applications and let CollegeSpace guide
            you towards success.
          </p>
          <div className="cheks-container">
            <div className="check">
              <img src="src/assets/checked.png" alt="" />
              <p>Centralized Deadline Tracker</p>
            </div>
            <div className="check">
              <img src="src/assets/checked.png" alt="" />
              <p>AI-Powered Essay Management</p>
            </div>
            <div className="check">
              <img src="src/assets/checked.png" alt="" />
              <p>Customized Timelines</p>
            </div>
            <div className="check">
              <img src="src/assets/checked.png" alt="" />
              <p>Application Status Tracking</p>
            </div>
          </div>
          <div className="buttons-container">
            <a href="#signup-form">
              <button className="signup-btn">Get Started</button>
            </a>
            <Link to="/login">
              <button className="login-btn">Login</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col2">
        <img src="src/assets/clipart.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
