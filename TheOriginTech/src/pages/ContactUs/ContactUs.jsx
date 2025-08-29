import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import WhatsappAndGoToTop from "../../components/WhatsappAndGoToTop/WhatsappAndGoToTop";
import { MdEmail, MdPhone, MdWork } from "react-icons/md";  // icons
import "./ContactUs.css";

const teamMembers = [
  {
    name: "MR. BIBEK KUMAR SHARMA",
    email: "bibeksharma@email.com",
    phone: "+977 9824870541",
    position: "Founder / Director",
  },
  {
    name: "ER. SHIVANG DUTTA",
    email: "shivangdutta@email.com",
    phone: "+977 9869165507",
    position: "Chief Executive Officer",
  },
  {
    name: "MR. SONY ALY",
    email: "michael.lee@email.com",
    phone: "+977 9813684661",
    position: "Managing Director",
  },
];

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <section className="contact-cards">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="contact-card">
            <h2>{member.name}</h2>
            <div className="line"></div>

            <p>
              <MdWork className="icon" /> {member.position}
            </p>
            <p>
              <MdEmail className="icon" /> {member.email}
            </p>
            <p>
              <MdPhone className="icon" /> {member.phone}
            </p>
          </div>
        ))}
      </section>

      <Form />
      <Footer />
      <WhatsappAndGoToTop />
    </>
  );
};

export default ContactUs;
