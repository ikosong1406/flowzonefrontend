// src/NotFound.js
import React from "react";
import "../styles/NotFound.css"; // Import the CSS file
import notFoundImage from "../images/notfound.png"; // Make sure to replace with your actual image path

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <img src={notFoundImage} alt="Not Found" className="not-found-image" />
      <h1 className="not-found-title">404 - Page Not Found</h1>
      {/* <p className="not-found-description">
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p> */}
    </div>
  );
};

export default NotFound;
