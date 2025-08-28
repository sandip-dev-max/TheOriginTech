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

import Categories from "../OurWork/Categories.jsx"; // 👈 import your Categories component

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

  return (
    <section className="services-section">
      <h2 className="services-title">Browse Our Work by Service</h2>

      {/* Services Grid */}
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <div className="service-label">{service.title}</div>
          </div>
        ))}
      </div>

      {/* 👇 Categories will now show here */}
      <Categories />
    </section>
  );
};

export default OurWorkServices;
