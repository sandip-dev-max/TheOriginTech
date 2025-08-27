import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <main className="hero">
      <div className="hero-content">
        <p className="hero-subtitle">
          PARTNERING FOR INNOVATION AND DIGITAL EXCELLENCE
        </p>
        <h1 className="hero-title">YOUR ORIGIN OF INNOVATION</h1>
        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => {
              navigate("/contactus");
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
            }}
          >
            Request a Quote
          </button>
          <button
            className="btn-secondary"
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight * 4,
                behavior: "smooth",
              });
            }}
          >
            Why Choose Us?
          </button>
        </div>
      </div>
    </main>
  );
};

export default Hero;
