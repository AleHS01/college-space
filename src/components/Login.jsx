// src/components/Login.js
import React, { useState } from "react";
import "../css/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Regular expression for validating email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Clear error message if validation passes
    setError("");

    // Handle login logic here

    // Reset form
    e.target.reset();
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>

          <div className="password-wrapper">
            <input
              type={isVisible ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="password-toggle"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? "Hide" : "Show"}
            </button>
          </div>
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
