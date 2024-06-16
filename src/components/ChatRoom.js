// src/components/ChatRoom.js
import React from "react";
import EmojiPicker from "@emoji-mart/react";

const ChatRoom = ({ group, messages, onSendMessage }) => {
  const [message, setMessage] = React.useState("");
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);

  const handleSend = () => {
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="chat-room">
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === "me" ? "my-message" : ""}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={() => setShowEmojiPicker(!showEmojiPicker)}>😊</button>
        {showEmojiPicker && (
          <EmojiPicker
            onEmojiSelect={(emoji) => setMessage(message + emoji.native)}
          />
        )}
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
