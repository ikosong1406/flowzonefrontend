import React, { useState, useEffect } from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="footerDiv1">
      <div className="footerDiv2">
        <div>
          <NavLink to="/" className="logoDiv1">
            <img src={logo} className="logoImage1" />
            <h1 className="logoName1">Flowzone</h1>
          </NavLink>
        </div>

        <div className="footerDiv4">
          <div className="footerDiv3">
            <h2 className="legal">Quick Links</h2>
            <Link to="/privacypolicy" className="legal1">
              About
            </Link>
            <Link to="/termsofuse" className="legal1">
              Features
            </Link>
          </div>
          <div className="footerDiv3">
            <h2 className="legal">Legal</h2>
            <Link to="/security" className="legal1">
              Security
            </Link>
            <Link to="/riskwarning" className="legal1">
              Risk Warning
            </Link>
            <Link to="/riskwarning" className="legal1">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div className="footerDiv4">
          <div className="footerDiv3">
            <h2 className="legal">Help</h2>
            <Link to="/faq" className="legal1">
              FAQ
            </Link>
          </div>
          <div className="footerDiv3">
            <h2 className="legal">Reach Us</h2>
            <Link to="/about" className="legal1">
              About Us
            </Link>
          </div>
        </div>
      </div>
      <h4 className="copy">2024 Flowzone inc. All Right Reserved</h4>
    </div>
  );
};

export default Footer;
