import { useState } from "react";
import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { GiProgression } from "react-icons/gi";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="sideDiv1">
      <div className="sideDiv2">
        <h1 className="logo">F</h1>
      </div>
      <div className="sideDiv3">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
          end
        >
          <FaHome className="icon" />
        </NavLink>
        <NavLink
          to="/dashboard/chat"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <AiFillMessage className="icon" />
        </NavLink>
        <NavLink
          to="/dashboard/progress"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <GiProgression className="icon" />
        </NavLink>
        <NavLink
          to="/dashboard/settings"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <IoSettings className="icon" />
        </NavLink>
        <NavLink
          to="/dashboard/account"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <span className="icon">AI</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
