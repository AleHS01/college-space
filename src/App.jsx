// src/App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SignUpForm from "./components/SignUpForm";
import Login from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <SignUpForm />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<div>About Us Page</div>} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
