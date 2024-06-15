import React, { useState, useEffect } from "react";
import "../styles/Chat.css";

const Chat = () => {
  return (
    <div className="chatMain">
      <div className="chatDiv1">
        <h1>Messages</h1>
      </div>
      <div className="chatDiv2">
        <div className="chatDiv21"></div>
        <div className="chatDiv22"></div>
      </div>
    </div>
  );
};

export default Chat;
