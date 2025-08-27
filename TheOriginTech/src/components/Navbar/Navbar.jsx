import { useState } from "react";
import logo from "../../assets/ORIGIN.png";
import "./Navbar.css";
import HamburgerMenu from "./HamburgerMenu";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
// import FormPupup from "../Form/FormPopup/FormPopup";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const [formPopup, setFormPopup] = useState(false);

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
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={"/services"}
                onClick={() => window.scrollTo(0, 0)}
              >
                Services{" "}
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to={"/aboutus"}
                onClick={() => window.scrollTo(0, 0)}
              >
                About Us{" "}
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
                Our Work{" "}
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
            <button
              className="cta-button"
              //  onClick={() => setFormPopup(true)}
            >
              Get Started
            </button>
          </NavLink>

          {isMenuOpen && <HamburgerMenu className="HamburgerMenu" />}
        </nav>
      </header>

      {/* {formPopup && (
        <FormPupup
          onClose={() => setFormPopup(false)}
          className="FormPupupFilling"
        />
      )} */}
    </>
  );
};

export default Navbar;
