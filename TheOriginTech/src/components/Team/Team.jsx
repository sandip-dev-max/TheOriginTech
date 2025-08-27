import React from "react";
import "./Team.css";
import team from "../../assets/team.png";

const Team = () => {
  const locations = [
    {
      name: "Everest Global Network",
      url: "https://everestglobalnetwork.com.np",
    },
    { name: "Sajilo Ticket", url: "https://sajiloticket.com.np" },
    {
      name: "Lakshya Global Network",
      url: "https://lakshyaglobalnetwork.com.np",
    },
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-image-container">
          <div className="image-wrapper">
            <img src={team} alt="Our team picture" className="team-image" />
          </div>
        </div>

        <div className="team-content">
          <h2 className="team-title">Our people are our greatest strength.</h2>
          <div className="team-features">
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    fill="#5c80f6ff"
                  />
                </svg>
              </div>
              <p className="feature-text">
                Over 100 specialists around the world, our team works tirelessly
                to support clients irrespective of time zone.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    fill="#5c8df6ff"
                  />
                </svg>
              </div>
              <p className="feature-text">
                We create and implement award-winning marketing, lead generation
                and sales strategies.
              </p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"
                    fill="#8b5cf6"
                  />
                </svg>
              </div>
              <p className="feature-text">And we're 100% in-house.</p>
            </div>
          </div>

          <div className="cta-section">
            <p className="cta-text">
              Let us take your business to the next level.
            </p>

            <div className="locations-container">
              {locations.map((location, index) => (
                <a
                  href={location.url}
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <button className="location-btn">{location.name}</button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
