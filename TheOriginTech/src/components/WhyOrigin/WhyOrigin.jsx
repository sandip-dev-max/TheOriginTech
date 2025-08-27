import React, { useState, useEffect } from "react";
import "./WhyOrigin.css";

const WhyOrigin = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reasons = [
    {
      id: 1,
      icon: "🚀",
      title: "Lightning Fast",
      description:
        "Experience blazing-fast performance with our optimized infrastructure that delivers results in milliseconds, not seconds.",
    },
    {
      id: 2,
      icon: "🛡️",
      title: "Bank-Level Security",
      description:
        "Your data is protected with military-grade encryption and security protocols that exceed industry standards.",
    },
    {
      id: 3,
      icon: "🎯",
      title: "Precision Accuracy",
      description:
        "Our advanced algorithms ensure 99.9% accuracy in all operations, giving you confidence in every result.",
    },
    {
      id: 4,
      icon: "💎",
      title: "Premium Quality",
      description:
        "Built with the finest attention to detail and crafted for those who demand nothing but the best.",
    },
    {
      id: 5,
      icon: "🌐",
      title: "Global Reach",
      description:
        "Connect with users worldwide through our global network of servers and partnerships.",
    },
    {
      id: 6,
      icon: "🤝",
      title: "24/7 Support",
      description:
        "Our dedicated support team is always here to help you succeed, anytime, anywhere.",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reasons.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, reasons.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reasons.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % reasons.length;
      cards.push(reasons[index]);
    }
    return cards;
  };

  return (
    <section className="why-origin-section">
      <div className="why-origin-container">
        <h2 className="section-title">Why The Origin Tech?</h2>

        <div
          className="carousel-container"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <button
            className="why-origin-tech-nav-button why-origin-tech-nav-prev"
            onClick={prevSlide}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="cards-wrapper">
            <div className="cards-container">
              {getVisibleCards().map((reason, index) => (
                <div
                  key={`${reason.id}-${currentSlide}`}
                  className={`reason-card ${index === 1 ? "center-card" : ""} ${
                    index === 0 ? "left-card" : ""
                  } ${index === 2 ? "right-card" : ""}`}
                >
                  <div className="card-icon">
                    <div className="icon-wrapper">
                      <span className="icon-emoji">{reason.icon}</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3 className="card-title">{reason.title}</h3>
                    <p className="card-description">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="why-origin-tech-nav-button why-origin-tech-nav-next"
            onClick={nextSlide}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="btn-dots-container">
          {reasons.map((_, index) => (
            <button
              key={index}
              className={`btn-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyOrigin;
