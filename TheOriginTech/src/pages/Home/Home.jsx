import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Expertise from "../../components/Expertise/Expertise";
import Background from "../../components/Background/Background";
import Stats from "../../components/Stats/Stats";
import Team from "../../components/Team/Team";
import WhyOrigin from "../../components/WhyOrigin/WhyOrigin";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import WhatsappAndGoToTop from "../../components/WhatsappAndGoToTop/WhatsappAndGoToTop";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    const buttons = document.querySelectorAll(
      ".btn-primary, .btn-secondary, .cta-button"
    );
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px) scale(1.05)";
      });

      button.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)";
      });
    });

    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          }
        });
      });

      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", function () {
          this.style.transform = "translateY(-3px) scale(1.05)";
        });

        button.removeEventListener("mouseleave", function () {
          this.style.transform = "translateY(0) scale(1)";
        });
      });
    };
  }, []);

  return (
    <>
      <Background />
      <Navbar />
      <Hero />
      <Stats />
      <Team />
      <Expertise />
      <WhyOrigin />
      <Form />
      <Footer />
      <WhatsappAndGoToTop />
    </>
  );
};

export default Home;
