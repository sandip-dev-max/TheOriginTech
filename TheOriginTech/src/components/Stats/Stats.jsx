import React, { useState, useEffect, useRef } from "react";
import "./Stats.css";

const Stats = () => {
  const [counts, setCounts] = useState({
    brands: 0,
    branches: 0,
    employees: 0,
    awards: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef(null);

  const statsData = [
    {
      key: "brands",
      target: 150,
      suffix: "+",
      label: "Brands",
      duration: 2500,
      prefix: "",
    },
    {
      key: "branches",
      target: 5,
      suffix: "+",
      label: "Branches",
      duration: 1500,
      prefix: "",
    },
    {
      key: "employees",
      target: 100,
      suffix: "+",
      label: "Employees",
      duration: 2000,
      prefix: "",
    },
    {
      key: "awards",
      target: 10,
      suffix: "+",
      label: "Awards",
      duration: 1800,
      prefix: "",
    },
  ];

  const animateCounter = (key, target, duration = 2000) => {
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentValue = Math.floor(startValue + target * easeOutExpo);

      setCounts((prev) => ({
        ...prev,
        [key]: currentValue,
      }));

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  const resetCounters = () => {
    setCounts({
      brands: 0,
      branches: 0,
      employees: 0,
      awards: 0,
    });
  };

  const startAnimation = () => {
    if (!hasAnimated) {
      setHasAnimated(true);
      resetCounters();

      statsData.forEach((stat, index) => {
        setTimeout(() => {
          animateCounter(stat.key, stat.target, stat.duration);
        }, index * 300);
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            startAnimation();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isVisible]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  const handleReset = () => {
    setHasAnimated(false);
    setIsVisible(false);
    setTimeout(() => {
      startAnimation();
    }, 100);
  };

  return (
    <div className="stats-section" ref={statsRef}>
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div
            key={stat.key}
            className={`stat-card ${isVisible ? "animate-in" : ""}`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="stat-number">
              {stat.prefix}
              {formatNumber(counts[stat.key])}
              {stat.suffix}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* <div className="stats-controls">
        <button onClick={handleReset} className="reset-btn">
          Reset Animation
        </button>
      </div> */}
    </div>
  );
};

export default Stats;
