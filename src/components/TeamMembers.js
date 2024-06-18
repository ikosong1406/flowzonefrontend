import React from "react";

const TeamMembers = () => {
  const teamMembers = [
    { id: 1, name: "John Doe", role: "Developer", status: "Active" },
    { id: 2, name: "Jane Smith", role: "Designer", status: "Inactive" },
    // Add more team members as needed
  ];

  return (
    <div className="teamMembers">
      <h2>Team Members</h2>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            {member.name} - {member.role} - {member.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMembers;
