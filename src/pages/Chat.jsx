import React, { useState } from "react";
import "../styles/Chat.css";
import ChatRoom from "../components/ChatRoom";
import GroupList from "../components/GroupList";

const Chat = () => {
  const [groups] = useState([
    {
      id: 1,
      name: "Group 1",
      category: "Web Design",
      lastMessage: "I understand, coach.",
      messages: [
        { sender: "user1", text: "Hello!" },
        { sender: "me", text: "Hi!" },
        { sender: "user1", text: "I understand, coach." },
      ],
    },
    {
      id: 2,
      name: "Group 2",
      category: "Development",
      lastMessage: "See you tomorrow.",
      messages: [{ sender: "user2", text: "See you tomorrow." }],
    },
    {
      id: 3,
      name: "Group 3",
      category: "Marketing",
      lastMessage: "Great job, team!",
      messages: [{ sender: "user3", text: "Great job, team!" }],
    },
  ]);

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
    setMessages(group.messages);
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
