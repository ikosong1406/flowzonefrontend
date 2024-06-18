import React, { useState, useEffect, useRef } from "react";
import EmojiPicker from "@emoji-mart/react";
import { FaPaperclip } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import cube from "../images/cube.png";
import { IoPricetag } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const ChatRoom = ({ group, messages, onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="chat-room">
      <div className="chat-header">
        <div style={{ display: "flex" }}>
          <img
            src={cube}
            alt=""
            style={{
              width: 40,
              borderRadius: 100,
              padding: 5,
              border: "1px solid gray",
              alignSelf: "center",
            }}
          />
          <div style={{ marginLeft: 10 }}>
            <h3>{group.name}</h3>
            <p
              style={{ color: "#a09e9e", marginTop: -10, alignSelf: "center" }}
            >
              <IoPricetag style={{ marginRight: 5, alignSelf: "center" }} />
              {group.category}
            </p>
          </div>
        </div>
        <div style={{ alignSelf: "center", marginRight: 20 }}>
          <FaSearch style={{ alignSelf: "center", fontSize: 18 }} />
        </div>
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "me" ? "my-message" : "other-message"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="message-input">
        <FaPaperclip className="attachment-icon" />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
        {showEmojiPicker && (
          <EmojiPicker
            onEmojiSelect={(emoji) => setMessage(message + emoji.native)}
          />
        )}
        <IoMdSend className="send-icon" onClick={handleSend} />
      </div>
    </div>
  );
};

export default ChatRoom;
