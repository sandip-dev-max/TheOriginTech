import React from "react";
import "./ThreePillars.css";
import ceo from "../../../assets/threePillars/ceo.PNG";
import founder from "../../../assets/threePillars/founder.PNG";
import manager from "../../../assets/threePillars/manager.PNG";

const ThreePillars = () => {
  return (
    <div className="three-pillars-slider">
      <div className="three-pillars-head">The Three Pillars of Origin Tech</div>
      <div className="three-pillars-slider-track">
        <a
          href={founder}
          target="_blank"
          rel="noopener noreferrer"
          className="three-pillars-card"
        >
          <img src={founder} alt="Team Photo 1" />
          {/* <div className="three-pillars-info">
            <h3>Shivang Dutta</h3>
            <p>CEO</p>
          </div> */}
        </a>

        <a
          href={ceo}
          target="_blank"
          rel="noopener noreferrer"
          className="three-pillars-card"
        >
          <img src={ceo} alt="Team Photo 2" />
          {/* <div className="three-pillars-info">
            <h3>Bibek Kumar Sharma</h3>
            <p>Founder and Director</p>
          </div> */}
        </a>

        <a
          href={manager}
          target="_blank"
          rel="noopener noreferrer"
          className="three-pillars-card"
        >
          <img src={manager} alt="Team Photo 3" />
          {/* <div className="three-pillars-info">
            <h3>Sonu Aly </h3>
            <p>Managing Director</p>
          </div> */}
        </a>
      </div>
    </div>
  );
};

export default ThreePillars;
