import React, { useEffect } from "react";
import "./Background.css";

const Background = () => {
  useEffect(() => {
    const createParticles = () => {
      const particleContainer = document.getElementById("particles");
      const numberOfParticles = 50;

      for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.animationDelay = Math.random() * 6 + "s";
        particle.style.animationDuration = Math.random() * 4 + 6 + "s";

        particleContainer.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <>
      <div className="animated-background"></div>
      <div className="overlay"></div>
      <div className="floating-particles" id="particles"></div>
    </>
  );
};

export default Background;
