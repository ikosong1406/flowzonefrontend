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
      lastMessage: "Let's review the wireframes tomorrow.",
      messages: [
        { sender: "user1", text: "Hello!" },
        { sender: "me", text: "Hi!" },
        { sender: "user1", text: "I understand, coach." },
        { sender: "user2", text: "Can you share the latest wireframes?" },
        { sender: "me", text: "Sure, I'll upload them in a minute." },
        { sender: "user3", text: "Thanks! Looking forward to the review." },
        {
          sender: "user1",
          text: "Great, let's review the wireframes tomorrow.",
        },
      ],
    },
    {
      id: 2,
      name: "Group 2",
      category: "Development",
      lastMessage: "Let's focus on the API integration next.",
      messages: [
        { sender: "user2", text: "See you tomorrow." },
        { sender: "me", text: "Remember to update the repository." },
        { sender: "user3", text: "I've pushed the latest changes." },
        { sender: "user2", text: "Great, I'll take a look." },
        { sender: "me", text: "Let's focus on the API integration next." },
      ],
    },
    {
      id: 3,
      name: "Group 3",
      category: "Marketing",
      lastMessage: "The campaign results are promising.",
      messages: [
        { sender: "user3", text: "Great job, team!" },
        { sender: "me", text: "The social media posts are doing well." },
        { sender: "user1", text: "Any updates on the email campaign?" },
        { sender: "user2", text: "Yes, we're seeing a good open rate." },
        { sender: "me", text: "The campaign results are promising." },
      ],
    },
  ]);

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
    setMessages(group.messages);
  };

  const handleSendMessage = (message) => {
    const newMessages = [...messages, { sender: "me", text: message }];
    setMessages(newMessages);

    // Update the last message in the group's data
    const updatedGroups = groups.map((g) =>
      g.id === selectedGroup.id
        ? { ...g, lastMessage: message, messages: newMessages }
        : g
    );
    setSelectedGroup({
      ...selectedGroup,
      lastMessage: message,
      messages: newMessages,
    });
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
