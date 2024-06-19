// src/Progress.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusSquare } from "react-icons/fa";
import ProjectModal from "../components/ProjectModal";
import TaskManagement from "../components/TaskManagement";
import InviteModal from "../components/InviteModal";
import TeamMembers from "../components/TeamMembers";
import "../styles/Progress.css";

const Progress = () => {
  const [showModal, setShowModal] = useState(false);
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [projects, setProjects] = useState([]);
  const [invites, setInvites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data from backend
    const dummyProjects = [
      {
        id: 1,
        name: "Project Alpha",
        description: "Alpha project description",
      },
      { id: 2, name: "Project Beta", description: "Beta project description" },
    ];
    const dummyInvites = [
      { id: 1, projectName: "Project Gamma" },
      { id: 2, projectName: "Project Delta" },
    ];
    setProjects(dummyProjects);
    setInvites(dummyInvites);
  }, []);

  const handleCreateProject = () => {
    setShowModal(true);
  };

  const handleAcceptInvite = (inviteId) => {
    // Handle accept logic
  };

  const handleDeclineInvite = (inviteId) => {
    // Handle decline logic
  };

  const navigateToProjectDashboard = (projectId) => {
    navigate(`/dashboard/projectId/${projectId}`);
  };

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
              className="project-card"
            >
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
        <div className="progressDiv22">
          <h3>Invited Collaborations</h3>
          {invites.map((invite) => (
            <div key={invite.id} className="invite-card">
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
      {/* 
      {showModal && <ProjectModal closeModal={() => setShowModal(false)} />}
      <TaskManagement />
      <button onClick={handleInviteUser}>Invite Users</button>
      {showInviteModal && (
        <InviteModal closeModal={() => setShowInviteModal(false)} />
      )}
      <TeamMembers /> */}
    </div>
  );
};

export default Progress;
