import React from "react";
import "./HamburgerMenu.css";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  return (
    <div className="HambergerMenuContainer">
      <ul className="nav-menu HambergerMenu">
        <li className="services">
          <Link to={"/services"}>Services </Link>
        </li>
        <li>
          <Link to={"/contactus"}>Solutions </Link>
        </li>
        <li>
          <Link to={"/aboutus"}>About Us </Link>
        </li>
        <li>
          <Link to={"/ourwork"}>Our Work </Link>
        </li>
        <li>
          <Link to={"/contactus"}> Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
