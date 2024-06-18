import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../images/logo.png";
import { IoLogOut } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

// Sample notifications
const sampleNotifications = [
  "Notification 1",
  "Notification 2",
  "Notification 3",
];

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(true);

  const handleSearch = () => {
    // Implement search functionality
    console.log("Search query:", searchQuery);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (hasUnreadNotifications) setHasUnreadNotifications(false);
  };

  const handleLogout = () => {
    toast.info("Are you sure you want to logout?", {
      position: "top-center",
      autoClose: false,
      closeOnClick: true,
      draggable: true,
      onClose: () => {
        // Handle logout logic
        console.log("User logged out");
        navigate("/");
      },
    });
  };

  return (
    <div className="headerMain">
      <ToastContainer />
      <div className="headerDiv1">
        <div className="headerDiv11">
          <img src={logo} alt="logo" />
          <h1>
            <span style={{ color: "#0070C0" }}>Flow</span>Zone
          </h1>
        </div>
        <div className="headerDiv12">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
          />
          <FaSearch
            style={{ alignSelf: "center", cursor: "pointer" }}
            onClick={handleSearch}
          />
        </div>
      </div>
      <div className="headerDiv2">
        <div style={{ position: "relative" }}>
          <IoNotifications
            style={{ cursor: "pointer" }}
            onClick={toggleModal}
          />
          {hasUnreadNotifications && (
            <span className="notificationIndicator"></span>
          )}
        </div>
        <IoLogOut
          style={{ cursor: "pointer", alignSelf: "center" }}
          onClick={handleLogout}
        />
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        contentLabel="Notifications"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Notifications</h2>
        <ul>
          {notifications.map((notification, index) => (
            <li key={index}>{notification}</li>
          ))}
        </ul>
        <button onClick={toggleModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Header;
