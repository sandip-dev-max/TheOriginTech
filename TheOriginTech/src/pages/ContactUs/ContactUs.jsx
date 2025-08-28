import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import WhatsappAndGoToTop from "../../components/WhatsappAndGoToTop/WhatsappAndGoToTop";
import "./ContactUs.css";
import contactvideo from "../../assets/contactvideo.mp4";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <section className="contactHeroVideo">
        <video
          autoPlay
          loop
          muted
          className="backgroundVideo"
          src={contactvideo}
          type="video/mp4"
        />
        <div className="heroContent">
          <h1>The Origin Tech</h1>
          <p>Let's create something amazing together.</p>
        </div>
      </section>

      <Form />
      <Footer />
      <WhatsappAndGoToTop />
    </>
  );
};

export default ContactUs;
