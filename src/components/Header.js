import React from "react";
import "../styles/Header.css";
import logo from "../images/logo.png";
import { IoSettings } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <div className="headerMain">
      <div className="headerDiv1">
        <div className="headerDiv11">
          <img src={logo} />
          <h1>
            <span style={{ color: "#33067B" }}>Flow</span>Zone
          </h1>
        </div>
        <div className="headerDiv12">
          <input />
        </div>
      </div>
      <div className="headerDiv2">
        <MdEmail />
        <IoNotifications />
        <IoSettings />
      </div>
    </div>
  );
};

export default Header;
