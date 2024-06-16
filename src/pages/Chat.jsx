import React, { useState, useEffect } from "react";
import "../styles/Chat.css";
import ChatRoom from "../components/ChatRoom";
import GroupList from "../components/GroupList";

const Chat = () => {
  const [groups] = React.useState([
    { id: 1, name: "Group 1" },
    { id: 2, name: "Group 2" },
    { id: 3, name: "Group 3" },
  ]);

  const [selectedGroup, setSelectedGroup] = React.useState(null);
  const [messages, setMessages] = React.useState([]);

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
    // Fetch group messages from API or set default messages
    setMessages([
      { sender: "user1", text: "Hello!" },
      { sender: "me", text: "Hi!" },
    ]);
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, { sender: "me", text: message }]);
  };

  return (
    <div className="chatMain">
      <div className="chatDiv1">
        <h1>Messages</h1>
      </div>
      <div className="chatDiv2">
        <div className="chatDiv21">
          <GroupList groups={groups} onSelectGroup={handleSelectGroup} />
        </div>
        <div className="chatDiv22">
          {selectedGroup ? (
            <ChatRoom
              group={selectedGroup}
              messages={messages}
              onSendMessage={handleSendMessage}
            />
          ) : (
            <div className="select-group">Select a group to start chatting</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
