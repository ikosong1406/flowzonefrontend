import React, { useState } from "react";
import "../styles/Header1.css";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Header1 = ({ clicked, setClicked }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileModal, setProfile] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const Profile = () => {
    setProfile(!profileModal);
  };

  return (
    <div className="head1Div1">
      <div>
        <NavLink to="/" className="logoDiv">
          <img src={logo} className="logoImage" />
          <h1 className="logoName">
            <span style={{ color: "#0070C0" }}>Flow</span>Zone
          </h1>
        </NavLink>
      </div>

      <div className="navList">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> Home</h3>
        </NavLink>
        <NavLink to="/notfound" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> About</h3>
        </NavLink>
        <NavLink to="/notfound" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> Features </h3>
        </NavLink>
        <NavLink to="/notfound" style={{ textDecoration: "none" }}>
          <h3 className="navItems"> Blog</h3>
        </NavLink>
      </div>

      <div className="authLinks">
        <NavLink to="/login" className="signBtn">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default Header1;
