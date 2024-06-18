import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import ProjectModal from "../components/ProjectModal"; // Import your modal component for creating a project
import TaskManagement from "../components/TaskManagement"; // Import your task management component
import InviteModal from "../components/InviteModal"; // Import your modal component for inviting users
import TeamMembers from "../components/TeamMembers"; // Import your component for listing team members
import "../styles/Progress.css";

const Progress = () => {
  const [showModal, setShowModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [invites, setInvites] = useState([]);
  const history = useNavigate();

  // Function to handle project creation
  const handleCreateProject = () => {
    setShowModal(true);
  };

  // Function to handle accepting an invite
  const handleAcceptInvite = (inviteId) => {
    // Handle accept logic
  };

  // Function to handle declining an invite
  const handleDeclineInvite = (inviteId) => {
    // Handle decline logic
  };

  // Function to navigate to project dashboard
  const navigateToProjectDashboard = (projectId) => {
    history.push(`/projects/${projectId}`); // Assuming your project dashboard route is /projects/:projectId
  };

  // Function to handle inviting users
  const handleInviteUser = () => {
    setShowInviteModal(true);
  };

  return (
    <div className="progressMain">
      <div className="progressDiv1">
        <h1>Projects</h1>
        <button onClick={handleCreateProject}>
          <FaPlusSquare style={{ marginRight: 10, alignSelf: "center" }} />
          Create New Project
        </button>
      </div>

      <div className="progressDiv2">
        <div className="progressDiv21">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => navigateToProjectDashboard(project.id)}
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <div className="progressDiv22">
          <h3>Invited Collaborations</h3>
          {invites.map((invite) => (
            <div key={invite.id}>
              <p>{invite.projectName}</p>
              <button onClick={() => handleAcceptInvite(invite.id)}>
                Accept
              </button>
              <button onClick={() => handleDeclineInvite(invite.id)}>
                Decline
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {showModal && <ProjectModal closeModal={() => setShowModal(false)} />}

      {/* Task Management Interface */}
      <TaskManagement />

      {/* Button to invite users */}
      <button onClick={handleInviteUser}>Invite Users</button>

      {/* Invite Modal */}
      {showInviteModal && (
        <InviteModal closeModal={() => setShowInviteModal(false)} />
      )}

      {/* Team Members */}
      <TeamMembers />
    </div>
  );
};

export default Progress;
