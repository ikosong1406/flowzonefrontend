import React, { useState } from "react";

const ProjectModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    goals: "",
    requirements: "",
    techStack: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit project data to backend
    closeModal();
  };

  return (
    <div className="modal">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="projectName"
          placeholder="Project Name"
          value={formData.projectName}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="goals"
          placeholder="Goals"
          value={formData.goals}
          onChange={handleChange}
        />
        <input
          type="text"
          name="requirements"
          placeholder="Requirements"
          value={formData.requirements}
          onChange={handleChange}
        />
        <input
          type="text"
          name="techStack"
          placeholder="Tech Stack"
          value={formData.techStack}
          onChange={handleChange}
        />
        <button type="submit">Create Project</button>
      </form>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};

export default ProjectModal;
