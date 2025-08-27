import React from "react";
import "./OurWorkServices.css";
import { CgWebsite } from "react-icons/cg";
import {
  FaSearch,
  FaPhotoVideo,
  FaHubspot,
  FaShoppingCart,
  FaBullhorn,
  FaMobileAlt,
} from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdContentPaste } from "react-icons/md";

import design1 from "../../assets/ourdesigns/design1.jpg"
import design2 from "../../assets/ourdesigns/design2.jpg"
import design3 from "../../assets/ourdesigns/design3.jpg"
import design4 from "../../assets/ourdesigns/design4.jpg"
import design5 from "../../assets/ourdesigns/design5.jpg"
import design6 from "../../assets/ourdesigns/design6.jpg"
import design7 from "../../assets/ourdesigns/design7.jpg"
import design8 from "../../assets/ourdesigns/design8.jpg"
import design9 from "../../assets/ourdesigns/design9.jpg"
import design10 from "../../assets/ourdesigns/design10.jpg"
import design11 from "../../assets/ourdesigns/design11.jpg"
import design12 from "../../assets/ourdesigns/design12.jpg"
import design13 from "../../assets/ourdesigns/design13.jpg"
import design14 from "../../assets/ourdesigns/design14.jpg"
import design15 from "../../assets/ourdesigns/design15.jpg"
import design16 from "../../assets/ourdesigns/design16.jpg"
import design17 from "../../assets/ourdesigns/design17.jpg"
import design18 from "../../assets/ourdesigns/design18.jpeg"
import design19 from "../../assets/ourdesigns/design19.jpg"
import design20 from "../../assets/ourdesigns/design20.jpeg"
import design21 from "../../assets/ourdesigns/design21.jpeg"
import design22 from "../../assets/ourdesigns/design22.jpeg"

const OurWorkServices = () => {
  const services = [
    { title: "Web and App", icon: <CgWebsite /> },
    { title: "SEO", icon: <FaSearch /> },
    { title: "Lead Generation", icon: <MdLeaderboard /> },
    { title: "Social Media", icon: <TbSocial /> },
    { title: "Digital Marketing", icon: <FaPhotoVideo /> },
    { title: "Hubspot", icon: <FaHubspot /> },
    { title: "App Development", icon: <FaMobileAlt /> },
    { title: "PPC Advertising", icon: <RiAdvertisementFill /> },
    { title: "E-commerce Solutions", icon: <FaShoppingCart /> },
    { title: "Brand Awareness", icon: <FaBullhorn /> },
  ];

  const designs = [
    design1,
    design2,
    design3,
    design4,
    design5,
    design6,
    design7,
    design8,
    design9,
    design10,
    design11,
    design12,
    design13,
    design14,
    design15,
    design16,
    design17,
    design18,
    design19,
    design20,
    design21,
    design22
  ];

  return (
    <section className="services-section">
      <h2 className="services-title">Browse Our Work by Service</h2>

      {/* Services */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <div className="service-label">{service.title}</div>
          </div>
        ))}
      </div>

      {/* Designs Section */}
      <h2 className="designs-title">Our Designs</h2>
      <div className="designs-grid">
        {designs.map((design, index) => (
          <div className="design-card" key={index}>
            <img src={design} alt={`Design ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkServices;
