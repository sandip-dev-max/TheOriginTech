import React, { useState, useEffect, useRef } from 'react';

const useCounterUp = (target, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      const targetNum = parseInt(target.toString().replace(/[^0-9]/g, ''));
      const increment = targetNum / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= targetNum) {
          setCount(targetNum);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, target, duration]);

  return { count, elementRef };
};

// Usage in your component:
const DigitalStatsSection = () => {
  const traffic = useCounterUp(300, 2500);
  const roi = useCounterUp(150, 2000);
  const retention = useCounterUp(85, 1800);
  const campaigns = useCounterUp(50, 1500);

  return (
    <div className="digitalstats-grid">
      <div className="digitalstats-card" ref={traffic.elementRef}>
        <div className="digitalstats-number">{traffic.count}%</div>
        <div className="digitalstats-label">Average Traffic Increase</div>
      </div>
      <div className="digitalstats-card" ref={roi.elementRef}>
        <div className="digitalstats-number">{roi.count}%</div>
        <div className="digitalstats-label">ROI Improvement</div>
      </div>
      <div className="digitalstats-card" ref={retention.elementRef}>
        <div className="digitalstats-number">{retention.count}%</div>
        <div className="digitalstats-label">Client Retention Rate</div>
      </div>
      <div className="digitalstats-card" ref={campaigns.elementRef}>
        <div className="digitalstats-number">{campaigns.count}+</div>
        <div className="digitalstats-label">Successful Campaigns</div>
      </div>
    </div>
  );
};