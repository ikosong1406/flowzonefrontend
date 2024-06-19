import React, { useState, useEffect, useCallback } from "react";
import "../styles/Home.css";
import cube from "../images/cube.png";
import {
  IoPricetag,
  IoMail,
  IoSettings,
  IoPerson,
  IoPersonAdd,
} from "react-icons/io5";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [projects, setProjects] = useState([]);

  const getData = useCallback(async (userToken) => {
    const data = { token: userToken };
    try {
      const response = await axios.post(`${BackendApi}/userdata`, data);
      const fetchedData = response.data.data;
      setUserData(fetchedData);
      setRefreshing(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const fetchData = useCallback(async () => {
    try {
      const userToken = await getUserToken();
      setToken(userToken);
      if (userToken) {
        await getData(userToken);
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
  }, [getData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    // Simulate fetching project data from backend
    const dummyProjects = [
      {
        id: 1,
        name: "Project Alpha",
        tag: "Web Development",
        description:
          "A comprehensive project focusing on full-stack web development.",
        technologies: ["HTML", "CSS", "JavaScript", "React"],
      },
      {
        id: 2,
        name: "Project Beta",
        tag: "Mobile Development",
        description:
          "A mobile app project targeting both iOS and Android platforms.",
        technologies: ["JavaScript", "React Native"],
      },
      {
        id: 3,
        name: "Project Gamma",
        tag: "Data Science",
        description:
          "A data science project involving data analysis and machine learning.",
        technologies: ["Python", "Pandas", "Scikit-learn"],
      },
    ];
    setProjects(dummyProjects);
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await getData(token);
  };

  const handleJoinProject = (projectId) => {
    toast.success(`Request to join project ${projectId} is successful`);
  };

  return (
    <div className="homeMain">
      <ToastContainer />
      <div className="homeDiv1">
        <h1>
          Welcome, {userData.firstname} {userData.lastname}
        </h1>
      </div>
      <div className="homeDiv2">
        <div className="homeDiv21">
          <div className="homeDiv211">
            <p>See what's happening in your account</p>
            <h3>Recent collaboration offers for you</h3>
          </div>
          <div className="homeDiv212">
            {projects.map((project) => (
              <div key={project.id} className="homeDiv2121">
                <div>
                  <img src={cube} alt="Project Icon" />
                </div>
                <div className="homeDiv2122">
                  <h2>{project.name}</h2>
                  <div className="homeDiv21221">
                    <p style={{ color: "#a09e9e", marginTop: -5 }}>
                      <IoPricetag style={{ marginRight: 5 }} />
                      {project.tag}
                    </p>
                  </div>
                  <h3>{project.description}</h3>
                  <div className="homeDiv21222">
                    {project.technologies.map((tech, index) => (
                      <h3 key={index}>{tech}</h3>
                    ))}
                  </div>
                  <button
                    className="actionButton"
                    onClick={() => handleJoinProject(project.name)}
                  >
                    Join Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="homeDiv22">
          <div className="homeDiv221">
            <h3>Activity Feed</h3>
            <ul className="activityFeed">
              <li style={{ backgroundColor: "skyblue" }}>
                <IoMail style={{ marginRight: 5 }} /> Message Notification
              </li>
              <li style={{ backgroundColor: "pink" }}>
                <IoSettings style={{ marginRight: 5 }} /> System Preference
                Update
              </li>
              <li style={{ backgroundColor: "lightgreen" }}>
                <IoPerson style={{ marginRight: 5 }} /> Update on Profile
              </li>
              <li style={{ backgroundColor: "violet" }}>
                <IoPersonAdd style={{ marginRight: 5 }} /> Invite a Friend
              </li>
            </ul>
          </div>
          <div className="homeDiv222">
            <h3>Your Recommendation Rate</h3>
            <p className="recommendationRate">25</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
