import React, { useState } from "react";

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, taskInput]);
      setTaskInput("");
    }
  };

  const handleDeleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="taskManagement">
      <h2>Task Management</h2>
      <input
        type="text"
        placeholder="Add Task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManagement;
