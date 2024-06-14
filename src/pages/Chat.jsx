import React, { useState, useEffect } from "react";
import "../styles/Chat.css";

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  // Update view state based on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const messages = [
    { id: 1, name: "Group 1", type: "group", content: "Hello Group 1" },
    { id: 2, name: "John Doe", type: "personal", content: "Hi John" },
    // Add more messages as needed
  ];

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setSelectedDetail(chat);
  };

  const handleDetailSelect = () => {
    setSelectedDetail(selectedChat);
  };

  return (
    <div className="chat-app">
      <div
        className={`chat-list ${isMobileView && selectedChat ? "hidden" : ""}`}
      >
        {messages.map((msg) => (
          <div key={msg.id} onClick={() => handleChatSelect(msg)}>
            {msg.name}
          </div>
        ))}
      </div>
      <div className={`chat-messages ${!selectedChat ? "hidden" : ""}`}>
        {selectedChat ? (
          <>
            <div className="messages">
              <div>{selectedChat.content}</div>
              <button onClick={handleDetailSelect} className="detail-button">
                {selectedChat.type === "group"
                  ? "Group Details"
                  : "User Details"}
              </button>
            </div>
          </>
        ) : (
          <div>Select a chat to view messages</div>
        )}
      </div>
      <div className={`chat-detail ${!selectedDetail ? "hidden" : ""}`}>
        {selectedDetail ? (
          <>
            <div className="details">
              {selectedDetail.type === "group" ? (
                <div>Details about {selectedDetail.name}</div>
              ) : (
                <div>Details about {selectedDetail.name}</div>
              )}
            </div>
          </>
        ) : (
          <div>Select a chat to view details</div>
        )}
      </div>
    </div>
  );
};

export default Chat;
