import { useState } from "react";
import logo from "../../assets/ORIGIN.png";
import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <nav className="nav-container">
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            to={"/"}
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
          </NavLink>

          <ul className="nav-menu">
            {/* 🔽 Services Dropdown */}
            <li className="services">
              <NavLink
                to={"/services"}
                className="nav-link"
                onClick={() => window.scrollTo(0, 0)}
              >
                Services ▾
              </NavLink>
              <ul className="dropdownStyle">
                <li>
                  
                  <NavLink
                    to="/services/WebAppServiceListDetail"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Web & App Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/DigitalMarketingServiceListDetail"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Digital Marketing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/SocialMediaServiceListDetail"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Social Media 
                  </NavLink>
                </li>
                 <li>
                  <NavLink
                    to="/services/SEOServiceListDetail"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    SEO
                  </NavLink>
                </li>
                  <li>
                    <NavLink
                      to="/services/PPCServiceListDetail"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      PPC Advertising
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/ContentMarketingServiceListDetail"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Content Marketing
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/EcommerceServiceListDetail"
                      className={({ isActive }) =>
                        isActive ? "nav-link active" : "nav-link"
                      }
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      Ecommerce Solution
                    </NavLink>
                  </li>
              </ul>
            </li>
            
             
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={"/aboutus"}
                onClick={() => window.scrollTo(0, 0)}
              >
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={"/ourwork"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Our Work
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={"/pricing"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Pricing
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={"/contactus"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>

          <div className="hamburgerBtn" onClick={toggleMenu}>
            <GiHamburgerMenu className="GiHamburgerMenu" />
          </div>

          <NavLink
            to={"/contactus"}
            onClick={() =>
              window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <button className="cta-button">Get Started</button>
          </NavLink>

          {isMenuOpen && <HamburgerMenu className="HamburgerMenu" />}
        </nav>
      </header>
    </>
  );
};

export default Navbar;