// src/components/GroupList.js
import React from "react";

const GroupList = ({ groups, onSelectGroup }) => {
  return (
    <div className="group-list">
      {groups.map((group) => (
        <div key={group.id} onClick={() => onSelectGroup(group)}>
          {group.name}
        </div>
      ))}
    </div>
  );
};

export default GroupList;
