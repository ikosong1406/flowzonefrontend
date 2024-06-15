import React from "react";
import "../styles/Header.css";
import logo from "../images/logo.png";
import { IoLogOut } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

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
          <FaSearch style={{ alignSelf: "center" }} />
        </div>
      </div>
      <div className="headerDiv2">
        <IoNotifications />
        <IoLogOut />
      </div>
    </div>
  );
};

export default Header;
