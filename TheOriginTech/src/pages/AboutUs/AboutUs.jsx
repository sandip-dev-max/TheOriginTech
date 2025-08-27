import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Stats from "../../components/Stats/Stats";
import ThreePillars from "./ThreePillars/ThreePillars";
import WhatsappAndGoToTop from "../../components/WhatsappAndGoToTop/WhatsappAndGoToTop";
import TeamImages from "./TeamImages/TeamImages";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="aboutus-container">
        <div className="firstpage">
          <h1>About Us</h1>
          <p>
            Our mission is to help drive growth for forward thinking companies
            combining innovative Marketing, Sales & Service technology and
            strategies to maximise customer acquisition and retention
            opportunities
          </p>
          <div className="about-buttons">
            <Link to="/Form">
              <button className="btn-left btn">Speak to us</button>
            </Link>
            <Link to="/Form">
              <button className="btn-right btn">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <Stats />
      <ThreePillars />
      <TeamImages />
      <Form />
      <Footer />
      <WhatsappAndGoToTop />
    </>
  );
};

export default AboutUs;
