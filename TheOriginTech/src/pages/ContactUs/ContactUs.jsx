import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import WhatsappAndGoToTop from "../../components/WhatsappAndGoToTop/WhatsappAndGoToTop";
import origintechcontactimage from "../../assets/origintechcontactimage.png";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="contactImageContainer">
        <img src={origintechcontactimage} alt="The Origin Tech Image" />
      </div>
      <h1 className="headOfContacts">Your First Step to Success</h1>
      <Form />
      <Footer />
      <WhatsappAndGoToTop />
    </>
  );
};

export default ContactUs;
