import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Cart from "../assets/Cart.svg";
import Hamburger from "../assets/hamburger.svg";
import Close from "../assets/close.png";
import "../styles/navbar.css";
const Navbar = () => {
  const [navSwitch, setNavSwitch] = useState("nav-visible");
  const navHandler = () => {
    navSwitch === "nav-visible"
      ? setNavSwitch("nav-hidden")
      : setNavSwitch("nav-visible");
  };
  return (
    <header>
      <div onClick={navHandler} className="hamburger">
        <img src={Hamburger} alt="Menu icon" role="button" />
      </div>
      <div className="logo">
        <img src={Logo} alt="Little Lemon Logo" />
      </div>
      <nav onClick={navHandler} className={`navbar ${navSwitch}`}>
        <div className="icon-close">
          <img src={Close} alt="close icon" role="button" />
        </div>
        <ul className="nav-list">
          <li className="nav-list-items">
            <a href="#home">home</a>
          </li>
          <li className="nav-list-items">
            <a href="#about">about</a>
          </li>
          <li className="nav-list-items">
            <a href="#menu">menu</a>
          </li>
          <li className="nav-list-items">
            <a href="#booking">booking</a>
          </li>
        </ul>
      </nav>
      <div className="cart">
        <a href="#booking">
          <img src={Cart} alt="cart-icon" className="cart-icon" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
