// src/components/GroupList.js
import React from "react";
import cube from "../images/cube.png";
import { IoPricetag } from "react-icons/io5";

const GroupList = ({ groups, onSelectGroup }) => {
  return (
    <div className="group-list">
      {groups.map((group) => (
        <div
          key={group.id}
          onClick={() => onSelectGroup(group)}
          style={{
            display: "flex",
            borderBottom: "1px solid #252626",
            marginTop: 15,
          }}
        >
          <div>
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
          </div>
          <div style={{ marginLeft: 10 }}>
            <h3
              style={{ marginTop: -5, alignSelf: "center", color: "#252626" }}
            >
              {group.name}
            </h3>
            <p
              style={{ color: "#a09e9e", marginTop: -10, alignSelf: "center" }}
            >
              <IoPricetag style={{ marginRight: 5, alignSelf: "center" }} />
              {group.category}
            </p>
            <h3 style={{ color: "#252626", fontWeight: "600" }}>
              {group.lastMessage}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GroupList;
