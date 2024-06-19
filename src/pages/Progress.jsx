// src/Progress.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlusSquare, FaCheck, FaTimes } from "react-icons/fa";
import { IoPricetag } from "react-icons/io5";
import "../styles/Progress.css";

const Progress = () => {
  const [projects, setProjects] = useState([]);
  const [invites, setInvites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data from backend
    const dummyProjects = [
      {
        id: 1,
        name: "Project Alpha",
        tag: "Web Development",
        description:
          "A comprehensive project focusing on full-stack web development.",
        skills: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "React",
          "Node.js",
          "Express",
          "MongoDB",
        ],
      },
      {
        id: 2,
        name: "Project Beta",
        tag: "Mobile Development",
        description:
          "A mobile app project targeting both iOS and Android platforms.",
        skills: ["JavaScript", "React Native", "React Native", "Firebase"],
      },
      {
        id: 3,
        name: "Project Gamma",
        tag: "Data Science",
        description:
          "A data science project involving data analysis and machine learning.",
        skills: [
          "Python",
          "Pandas",
          "Scikit-learn",
          "Jupyter Notebook",
          "TensorFlow",
          "Keras",
        ],
      },
    ];

    const dummyInvites = [
      {
        id: 1,
        projectName: "Project Delta",
        description: "Join our team to work on a groundbreaking AI project.",
        tag: "Artificial Intelligence",
      },
      {
        id: 2,
        projectName: "Project Epsilon",
        description:
          "Help us build a scalable backend for our e-commerce platform.",
        tag: "Backend Development",
      },
    ];

    setProjects(dummyProjects);
    setInvites(dummyInvites);
  }, []);

  const handleCreateProject = () => {
    // Logic to handle project creation
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
              <div className="homeDiv21221">
                <p style={{ color: "#a09e9e", marginTop: -5 }}>
                  <IoPricetag style={{ marginRight: 5 }} />
                  {project.tag}
                </p>
              </div>
              <p>{project.description}</p>
              <div className="homeDiv21222">
                {project.skills.map((skill, index) => (
                  <h3 key={index}>{skill}</h3>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="progressDiv22">
          <h3>Invited Collaborations</h3>
          {invites.map((invite) => (
            <div key={invite.id} className="invite-card">
              <h3>{invite.projectName}</h3>
              <p>{invite.description}</p>
              <p style={{ color: "#a09e9e", marginTop: -5 }}>
                <IoPricetag style={{ marginRight: 5 }} />
                {invite.tag}
              </p>
              <button onClick={() => handleAcceptInvite(invite.id)}>
                <FaCheck style={{ marginRight: 5 }} />
                Accept
              </button>
              <button onClick={() => handleDeclineInvite(invite.id)}>
                <FaTimes style={{ marginRight: 5 }} />
                Decline
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Progress;
