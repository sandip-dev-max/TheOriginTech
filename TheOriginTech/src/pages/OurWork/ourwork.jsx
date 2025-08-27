import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Background from "../../components/Background/Background";
import WhatsappAndGoToTop from "../../components/WhatsappAndGoToTop/WhatsappAndGoToTop";
import Footer from "../../components/Footer/Footer";
import video from "../../assets/3DObject-Asset.mp4";
import OurWorkServices from "./OurWorkServices";
import "./OurWork.css";

const OurWork = () => {
  return (
    <>
      <Navbar />
      <div className="ourWorkContainer">
        <div className="ourWorkFirstPage">
          <div className="leftContainer">
            <h1 className="firsthead">Client Success Is Our Success</h1>
            <p className="discription">
              Would you like to see some examples of what we can do for you? At
              The Origin Tech, we have the skill and know-how to design, develop
              and execute projects that boost your brand. We are a team of keen
              strategists who strive to stay on top of design trends and enable
              technologies to assist our clients in achieving quality lead
              generation and conversion goals. With over 300 active global
              clients, it is impossible to showcase all our work, but we have
              included a few samples to highlight our abilities. Please reach
              out to us if you want to see more.
            </p>
          </div>
          <div className="rightContainer">
            <video autoPlay loop muted playsInline className="videoLoop">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <OurWorkServices />
      <Form />
      <Footer />
      <Background />
      <WhatsappAndGoToTop />
    </>
  );
};

export default OurWork;
