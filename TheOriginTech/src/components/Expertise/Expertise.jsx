import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faCode,
  faHashtag,
  faAd,
  faPenFancy,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "./Expertise.css";

const Services = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const services = [
    {
      icon: faMobileAlt,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications designed for optimal user experience and performance across iOS and Android devices.",
      link: "/services/WebAppServiceListDetail",
    },
    {
      icon: faCode,
      title: "Web Development",
      description:
        "Modern, responsive websites and web applications built with cutting-edge technologies for maximum performance and scalability.",
      link: "/services/WebAppServiceListDetail",
    },
    {
      icon: faHashtag,
      title: "Social Media Marketing",
      description:
        "Engaging social media campaigns across all major platforms to build brand awareness and drive customer engagement.",
      link: "/services/SocialMediaServiceListDetail",
    },
    {
      icon: faAd,
      title: "PPC Advertising",
      description:
        "Targeted pay-per-click campaigns on Google, Facebook, and other platforms to generate qualified leads and maximize ROI.",
      link: "/services/PPCServiceListDetail",
    },
    {
      icon: faPenFancy,
      title: "Content Marketing",
      description:
        "Compelling content creation and marketing strategies that resonate with your audience and establish thought leadership.",
      link: "/services/ContentMarketingServiceListDetail",
    },
    {
      icon: faShoppingCart,
      title: "E-Commerce Solutions",
      description:
        "Complete online store setups with secure payment gateways and optimized shopping experiences for maximum conversions.",
      link: "/services/EcommerceServiceListDetail",
    },
  ];

  return (
    <div className="expertise-container">
      <div className="expertise-newDiv">
        <div className="expertise-newDiv"></div>
        <h1 className="expertise-heading">Our Expertise</h1>
        <div className="expertise-services-grid">
          {services.map((service, index) => (
            <Link
              to={service.link}
              onClick={scrollToTop}
              key={index}
              className="expertise-service-card-link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="expertise-service-card">
                <div className="expertise-service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
