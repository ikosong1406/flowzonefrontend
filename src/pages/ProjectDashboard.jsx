// src/ProjectDashboard.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import TaskManagement from "../components/TaskManagement";
import TeamMembers from "../components/TeamMembers";
import InviteModal from "../components/InviteModal";
import "../styles/ProjectDashboard.css";

const ProjectDashboard = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [showInviteModal, setShowInviteModal] = useState(false);

  useEffect(() => {
    // Simulate fetching project details from backend
    const dummyProject = {
      id: projectId,
      name: `Project ${projectId}`,
      description: `Description for Project ${projectId}`,
      teamMembers: [
        { id: 1, name: "Alice", role: "Developer" },
        { id: 2, name: "Bob", role: "Designer" },
      ],
      tasks: [
        { id: 1, title: "Task 1", status: "In Progress" },
        { id: 2, title: "Task 2", status: "Completed" },
      ],
    };
    setProject(dummyProject);
  }, [projectId]);

  const handleInviteUser = () => {
    setShowInviteModal(true);
  };

  return (
    <div className="projectDashboard">
      {project && (
        <>
          <h1>{project.name}</h1>
          <p>{project.description}</p>

          <div className="teamMembersSection">
            <h2>Team Members</h2>
            <TeamMembers members={project.teamMembers} />
          </div>

          <div className="tasksSection">
            <h2>Tasks</h2>
            <TaskManagement tasks={project.tasks} />
          </div>

          <button onClick={handleInviteUser}>Invite Users</button>

          {showInviteModal && (
            <InviteModal closeModal={() => setShowInviteModal(false)} />
          )}
        </>
      )}
    </div>
  );
};

export default ProjectDashboard;
