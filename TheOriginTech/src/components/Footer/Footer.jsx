import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const OriginTechWebsite = () => {
  const navigate = useNavigate;
  const handleOnclickContactUs = () => {
    navigate("/contactus");
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const scrollToContactForm = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className="footer-container">
        <div className="first-column">
          <div className="hero-text">
            <h2>Your growth starts here</h2>
            <button
              className="cta-button"
              onClick={() => handleOnclickContactUs}
            >
              Request a Quote
            </button>
          </div>
          <div className="links-section">
            <ul>
              <li>
                <Link to="/services" onClick={scrollToTop}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/ourwork" onClick={scrollToTop}>
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() =>
                    window.scrollTo({
                      top: window.innerHeight * 4,
                      behavior: "smooth",
                    })
                  }
                >
                  Why Origin Tech
                </Link>
              </li>
              <li>
                <Link to="/contactus" onClick={scrollToTop}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <footer className="second-column">
          <div className="logo">
            <h1>THE-ORIGIN-TECH</h1>
          </div>
          <div className="second-column-container">
            <nav className="nav">
              <div className="nav-section">
                <h3>Services</h3>
                <ul>
                  <li>
                    <Link
                      to="/services/WebAppServiceListDetail"
                      onClick={scrollToTop}
                    >
                      Web and App Dev
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/DigitalMarketingServiceListDetail"
                      onClick={scrollToTop}
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/SocialMediaServiceListDetail"
                      onClick={scrollToTop}
                    >
                      Social Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/SEOServiceListDetail"
                      onClick={scrollToTop}
                    >
                      SEO
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/PPCServiceListDetail"
                      onClick={scrollToTop}
                    >
                      PPC Advertising
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/ContentMarketingServiceListDetail"
                      onClick={scrollToTop}
                    >
                      Content Marketing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/EcommerceServiceListDetail"
                      onClick={scrollToTop}
                    >
                      Ecommerce Solution
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Company</h3>
                <ul>
                  <li>
                    <Link to="/services" onClick={scrollToTop}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={scrollToTop}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/ourwork" onClick={scrollToTop}>
                      Our Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      onClick={() =>
                        window.scrollTo({
                          top: window.innerHeight * 4,
                          behavior: "smooth",
                        })
                      }
                    >
                      Why Origin Tech
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" onClick={scrollToTop}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Legal</h3>
                <ul>
                  <li>
                    <Link to="/contactus" onClick={scrollToContactForm}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" onClick={scrollToContactForm}>
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" onClick={scrollToContactForm}>
                      Cookie Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" onClick={scrollToContactForm}>
                      GDPR Compliance
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="nav-section">
                <h3>Support</h3>
                <ul>
                  <li>
                    <Link to="/contactus" onClick={scrollToContactForm}>
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" onClick={scrollToContactForm}>
                      Documentation
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" onClick={scrollToContactForm}>
                      How Our Team Works
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactus" onClick={scrollToContactForm}>
                      Contact Support
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </footer>

        <div className="last-column">
          <div className="container">
            <div className="hero-section">
              <div className="contact-info">
                <div className="head-office">
                  <h4>Head Office 📍</h4>
                  <p>Subhidhanagar 32, Tinekune, Kathmandu, Nepal</p>
                </div>

                <div className="contact-details">
                  <h4>Contact Details </h4>
                  <p>📞 +977-9704525401</p>
                  <p>✉️ theorigintechnology@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="social-media">
              <h4>FOLLOW US</h4>
              <div className="social-icons">
                <a href="#" className="social-icon facebook">
                  f
                </a>
                <a href="#" className="social-icon linkedin">
                  in
                </a>
                <a href="#" className="social-icon instagram">
                  📷
                </a>
                <a href="#" className="social-icon twitter">
                  X
                </a>
                <a href="#" className="social-icon youtube">
                  ▶
                </a>
              </div>
            </div>
            <div class="map-container">
              <iframe
                src="https://www.google.com/maps?q=27.68456,85.34766&z=15&output=embed"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <footer className="footer-coopyright">
          © 2025 The Origin Tech. All rights reserved. |{" "}
          <a href="/privacy-policy">Privacy Policy</a> |{" "}
          <a href="/terms-of-service">Terms of Service</a> |{" "}
          <a onClick={() => handleOnclickContactUs}>Contact Us</a>
        </footer>
      </div>
    </div>
  );
};

export default OriginTechWebsite;
