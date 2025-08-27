import React from "react";
import "./ServiceList.css";
import webImg from "../../../assets/ServicesImage/webandappdev.jpg";
import seoImg from "../../../assets/ServicesImage/seoImg.png";
import contentMarketing from "../../../assets/ServicesImage/contentMarketing.jpeg";
import digitalImg from "../../../assets/ServicesImage/digitalmarketing.png";
import socialImg from "../../../assets/ServicesImage/socialmedia.png";
import EcommerceASolution from "../../../assets/ServicesImage/EcommerceSolution.png";
import ppcImg from "../../../assets/ServicesImage/ppcImg.jpg";
import { useNavigate } from "react-router-dom";

const ServiceList = () => {
  const navigate = useNavigate();

  const handleShowMoreClickWebAppServiceListDetail = () => {
    navigate("/services/WebAppServiceListDetail");
    window.scrollTo(0, 0);
  };

  const handleShowMoreClickDigitalMarketingServiceListDetail = () => {
    navigate("/services/DigitalMarketingServiceListDetail");
    window.scrollTo(0, 0);
  };

  const ContentMarketingServiceListDetail = () => {
    navigate("/services/ContentMarketingServiceListDetail");
    window.scrollTo(0, 0);
  };

  const handleShowMoreClickPPCServiceListDetail = () => {
    navigate("/services/PPCServiceListDetail");
    window.scrollTo(0, 0);
  };

  const handleShowMoreClickSEOServiceListDetail = () => {
    navigate("/services/SEOServiceListDetail");
    window.scrollTo(0, 0);
  };

  const handleShowMoreClickSocialMediaServiceListDetail = () => {
    navigate("/services/SocialMediaServiceListDetail");
    window.scrollTo(0, 0);
  };

  const handleShowMoreClickEcommerceServiceListDetail = () => {
    navigate("/services/EcommerceServiceListDetail");
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="service-container">
        <div className="service-image">
          <img src={webImg} alt="Web and App Development" />
        </div>
        <div className="service-content">
          <h2>Web & App Development</h2>
          <p>
            We build modern, responsive, and scalable websites and mobile
            applications using the latest technologies. Our focus is on creating
            user-friendly designs that work seamlessly across all devices.
          </p>

          <button
            onClick={handleShowMoreClickWebAppServiceListDetail}
            className="show-more-btn"
          >
            Show More
          </button>
        </div>
      </div>

      <div className="service-container reverse">
        <div className="service-content">
          <h2>Digital Marketing</h2>
          <p>
            We help your brand grow online through SEO, social media, paid
            advertising, and content marketing. Our strategies are data-driven
            and designed to maximize visibility, engagement, and conversions.
          </p>

          <button
            className="show-more-btn"
            onClick={handleShowMoreClickDigitalMarketingServiceListDetail}
          >
            Show More
          </button>
        </div>

        <div className="service-image">
          <img src={digitalImg} alt="Digital Marketing" />
        </div>
      </div>

      <div className="service-container">
        <div className="service-image">
          <img src={socialImg} alt="Social Media" />
        </div>
        <div className="service-content">
          <h2>Social Media</h2>
          <p>
            We create data-driven social media strategies that grow your brand's
            presence and engage your audience. Our focus is on building
            authentic connections and creating compelling content that drives
            real results.
          </p>

          <button
            className="show-more-btn"
            onClick={handleShowMoreClickSocialMediaServiceListDetail}
          >
            Show More
          </button>
        </div>
      </div>

      <div className="service-container reverse">
        <div className="service-content">
          <h2>SEO - Search Engine Optimization</h2>
          <p>
            We specialize in Search Engine Optimization (SEO) to help your brand
            increase its online visibility and organic traffic. Our strategies
            focus on data-driven techniques to improve your search engine
            rankings and drive conversions.
          </p>

          <button
            className="show-more-btn"
            onClick={handleShowMoreClickSEOServiceListDetail}
          >
            Show More
          </button>
        </div>

        <div className="service-image">
          <img src={seoImg} alt="Search Engine Optimization" />
        </div>
      </div>

      <div className="service-container">
        <div className="service-image">
          <img src={ppcImg} alt="Social Media" />
        </div>
        <div className="service-content">
          <h2>PPC Advertising</h2>
          <p>
            Targeted pay-per-click campaigns on Google, Facebook, and other
            platforms to generate qualified leads and maximize ROI.Targeted
            pay-per-click campaigns on Google, Facebook, and other platforms to
            generate qualified leads and maximize ROI.
          </p>

          <button
            className="show-more-btn"
            onClick={handleShowMoreClickPPCServiceListDetail}
          >
            Show More
          </button>
        </div>
      </div>

      <div className="service-container reverse">
        <div className="service-content">
          <h2>Content Marketing</h2>
          <p>
            Compelling content creation and marketing strategies that resonate
            with your audience and establish thought leadership.
          </p>

          <button
            className="show-more-btn"
            onClick={ContentMarketingServiceListDetail}
          >
            Show More
          </button>
        </div>

        <div className="service-image">
          <img src={contentMarketing} alt="Search Engine Optimization" />
        </div>
      </div>

      <div className="service-container">
        <div className="service-image">
          <img src={EcommerceASolution} alt="Ecommerce Solution" />
        </div>
        <div className="service-content">
          <h2>Ecommerce Solutions</h2>
          <p>
            Complete online store setups with secure payment gateways and
            optimized shopping experiences for maximum conversions.
          </p>

          <button
            className="show-more-btn"
            onClick={handleShowMoreClickEcommerceServiceListDetail}
          >
            Show More
          </button>
        </div>
      </div>
    </>
  );
};

export default ServiceList;
