import React from "react";
import "./TeamImages.css";
import khagendra from "../../../assets/teamImages/khagendra.PNG";
import sabina from "../../../assets/teamImages/sabina.PNG";
import bipul from "../../../assets/teamImages/bipul.PNG";
import sonu from "../../../assets/teamImages/sonu.PNG";
import sandip from "../../../assets/teamImages/sandip.PNG";
import ishab from "../../../assets/teamImages/ishab.jpg"
import chitra from "../../../assets/teamImages/chitra.png";
import mannu from "../../../assets/teamImages/mannu.png";

export default function TeamImages() {
  return (
    <div className="team-image-slider">
      <div className="team-image-head">Our Tech Team</div>
      <div className="team-image-slider-track">
        <a
          href={bipul}
          target="_blank"
          rel="noopener noreferrer"
          className="team-image-card"
        >
          <img src={bipul} alt="Team member image" />
          <div className="team-image-info">
            <h3>Bipul Chandra Rijal</h3>
            <p>Front-End Developer</p>
          </div>
        </a>

        <a
          href={sabina}
          target="_blank"
          rel="noopener noreferrer"
          className="team-image-card"
        >
          <img src={sabina} alt="Team member image" />
          <div className="team-image-info">
            <h3>Sabina Deula</h3>
            <p>Back-End Developer</p>
          </div>
        </a>

        <a
          href={sandip}
          target="_blank"
          rel="noopener noreferrer"
          className="team-image-card"
        >
          <img src={sandip} alt="Team member image" />
          <div className="team-image-info">
            <h3>Sandip Bhatta</h3>
            <p>Back-End Developer</p>
          </div>
        </a>

        <a
          href={khagendra}
          target="_blank"
          rel="noopener noreferrer"
          className="team-image-card"
        >
          <img src={khagendra} alt="Team member image" />
          <div className="team-image-info">
            <h3>Khagendra Prasad Awasthi</h3>
            <p>Front-End Developer</p>
          </div>
        </a>

        <a
          href={mannu}
          target="_blank"
          rel="noopener noreferrer"
          className="team-image-card"
        >
          <img src={mannu} alt="Team member image" />
          <div className="team-image-info">
            <h3>Mannu Kumari Singh</h3>
            <p>Graphic Designer</p>
          </div>
        </a>
        <a
          href={chitra}
          target="_blank"
          rel="noopener noreferrer"
          className="team-image-card"
        >
          <img src={chitra} alt="Team member image" />
          <div className="team-image-info">
            <h3>Chitra Kumari Thapa</h3>
            <p>Back-End Developer</p>
          </div>
        </a>

        <a
          href={ishab}
          target="_blank"
          rel="noopener noreferrer"
          className="team-image-card"
        >
          <img src={ishab} alt="Team member image" />
          <div className="team-image-info">
            <h3>Ishab Das</h3>
            <p>Back-End Developer</p>
          </div>
        </a>
      </div>
    </div>
  );
}
