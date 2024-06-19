import React, { useState, useEffect } from "react";
import "../styles/Accounts.css";
import person from "../images/usericon.jpeg";
import { IoPricetag } from "react-icons/io5";
import { FaEdit, FaFilePdf, FaCalendarAlt } from "react-icons/fa";
import { MdEmail, MdOutlineWork } from "react-icons/md";
import Modal from "react-modal";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";

const portfolioItemsData = [
  {
    id: 1,
    title: "Project One",
    image: "project1.jpg",
    link: "https://example.com/project1",
    description: "A brief description of Project One.",
    technologies: ["React", "Node.js", "CSS"],
  },
  {
    id: 2,
    title: "Project Two",
    image: "project2.jpg",
    link: "https://example.com/project2",
    description: "A brief description of Project Two.",
    technologies: ["Python", "Django", "Bootstrap"],
  },
];

const skillsData = [
  "JavaScript",
  "React",
  "Node.js",
  "Python",
  "Django",
  "CSS",
];
const recommendations = 5;

const Accounts = () => {
  const [portfolioItems, setPortfolioItems] = useState(portfolioItemsData);
  const [skills, setSkills] = useState(skillsData);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [editUserModalOpen, setEditUserModalOpen] = useState(false);
  const [editPortfolioModalOpen, setEditPortfolioModalOpen] = useState(false);
  const [editSkillsModalOpen, setEditSkillsModalOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchData = async () => {
    try {
      const userToken = await getUserToken();
      setToken(userToken);
      if (userToken) {
        await getData(userToken);
      }
    } catch (error) {
      console.error("Error retrieving token:", error);
    }
  };

  const getData = async (userToken) => {
    const data = { token: userToken };
    try {
      const response = await axios.post(`${BackendApi}/userdata`, data);
      const fetchedData = response.data.data;
      setUserData(fetchedData);
      setRefreshing(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Check if userData exists and has firstname before accessing it
    if (userData && userData.firstname) {
      console.log("First Name:", userData.firstname);
    }
  }, [userData]); // Run this effect whenever userData changes

  const openModal = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedPortfolio(null);
  };

  const openEditUserModal = () => {
    setEditUserModalOpen(true);
  };

  const closeEditUserModal = () => {
    setEditUserModalOpen(false);
  };

  const openEditPortfolioModal = (portfolio) => {
    setSelectedPortfolio(portfolio);
    setEditPortfolioModalOpen(true);
  };

  const closeEditPortfolioModal = () => {
    setEditPortfolioModalOpen(false);
    setSelectedPortfolio(null);
  };

  const openEditSkillsModal = () => {
    setEditSkillsModalOpen(true);
  };

  const closeEditSkillsModal = () => {
    setEditSkillsModalOpen(false);
  };

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
  };

  const handleSkillsChange = (index, value) => {
    const updatedSkills = skills.map((skill, i) =>
      i === index ? value : skill
    );
    setSkills(updatedSkills);
  };

  const handlePortfolioChange = (e) => {
    const { name, value } = e.target;
    setSelectedPortfolio((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const savePortfolioChanges = () => {
    const updatedPortfolioItems = portfolioItems.map((item) =>
      item.id === selectedPortfolio.id ? selectedPortfolio : item
    );
    setPortfolioItems(updatedPortfolioItems);
    closeEditPortfolioModal();
  };

  return (
    <div className="accountMain">
      <div className="accountDiv1">
        <h1>Profile</h1>
      </div>
      <div className="accountDiv2">
        <div className="accountDiv21">
          <div className="accountDiv211">
            <img src={person} alt="" />
          </div>
          <div className="accountDiv212">
            <h2>
              {userData.firstname} {userData.lastname}
            </h2>
            <p style={{ color: "#a09e9e", marginTop: -5 }}>
              <IoPricetag />
              <span style={{ marginLeft: 10 }}>{userData.role}</span>
            </p>
            <h3>Collaboration Done: {userData.collaboration}</h3>
            <h3>Bio:</h3>
            <p style={{ marginTop: -10 }}>{userData.bio}</p>
          </div>
        </div>
        <div className="accountDiv22">
          <div className="accounDiv221">
            <h2 style={{ fontWeight: "500" }}>Contact Information</h2>
            <div className="accountDiv2211">
              <h3>
                <MdEmail style={{ marginRight: 5 }} />
                Email:
              </h3>
              <h3>{userData.email}</h3>
            </div>
            <div className="accountDiv2211">
              <h3>
                <MdOutlineWork style={{ marginRight: 5 }} />
                Industry:
              </h3>
              <h3>{userData.industry}</h3>
            </div>
            <div className="accountDiv2211">
              <h3>
                <FaCalendarAlt style={{ marginRight: 5 }} />
                Date of Birth:
              </h3>
              <h3>{userData.dob}</h3>
            </div>
            <div className="accountDiv2211">
              <h3>
                <FaFilePdf style={{ marginRight: 5, color: "red" }} />
                Attachment:
              </h3>
              <h3>{userData.attachment}</h3>
            </div>
          </div>
          <div className="accounDiv222" onClick={openEditUserModal}>
            <FaEdit />
          </div>
        </div>
      </div>
      <div className="accountDiv3">
        <div className="accountDiv31">
          <div className="portfolioHeader">
            <h3>Portfolio Items</h3>
            <FaEdit
              className="editIcon"
              onClick={() => openEditPortfolioModal(null)}
            />
          </div>
          <div className="portfolioItems">
            {portfolioItems.length === 0 ? (
              <p>No portfolio work to show.</p>
            ) : (
              portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="portfolioItem"
                  onClick={() => openModal(item)}
                >
                  <h4>{item.title}</h4>
                  <FaEdit
                    className="editIcon"
                    onClick={(e) => {
                      e.stopPropagation();
                      openEditPortfolioModal(item);
                    }}
                  />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="accountDiv32">
          <div className="accountDiv321">
            <div className="skillsHeader">
              <h3>My Skills</h3>
              <FaEdit className="editIcon" onClick={openEditSkillsModal} />
            </div>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="accountDiv322">
            <h3>My Recommendations</h3>
            <p>{recommendations} recommendations</p>
          </div>
        </div>
      </div>
      {selectedPortfolio && (
        <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
          <div className="modalContent">
            <h2>{selectedPortfolio.title}</h2>
            <img src={selectedPortfolio.image} alt={selectedPortfolio.title} />
            <p>{selectedPortfolio.description}</p>
            <p>
              <strong>Technologies Used:</strong>{" "}
              {selectedPortfolio.technologies.join(", ")}
            </p>
            <a
              href={selectedPortfolio.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
            <button onClick={closeModal} style={{ backgroundColor: "red" }}>
              Close
            </button>
          </div>
        </Modal>
      )}
      <Modal isOpen={editUserModalOpen} onRequestClose={closeEditUserModal}>
        <div className="modalContent">
          <h2>Edit User Details</h2>
          <form>
            <label>
              Firstname:
              <input
                type="text"
                name="name"
                value={userData.firstname}
                onChange={handleUserDetailsChange}
              />
            </label>
            <label>
              Lastname:
              <input
                type="text"
                name="name"
                value={userData.lastname}
                onChange={handleUserDetailsChange}
              />
            </label>
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={handleUserDetailsChange}
              />
            </label>
            <label>
              Industry:
              <input
                type="text"
                name="industry"
                value={userData.industry}
                onChange={handleUserDetailsChange}
              />
            </label>
            <label>
              Date of Birth:
              <input
                type="text"
                name="dob"
                value={userData.dob}
                onChange={handleUserDetailsChange}
              />
            </label>
            <label>
              Bio:
              <textarea
                name="bio"
                value={userData.bio}
                onChange={handleUserDetailsChange}
              />
            </label>
            <label>
              Attachment:
              <input
                type="text"
                name="attachment"
                value={userData.attachment}
                onChange={handleUserDetailsChange}
              />
            </label>
          </form>
          <button
            onClick={closeEditUserModal}
            style={{ backgroundColor: "red" }}
          >
            Close
          </button>
        </div>
      </Modal>
      <Modal
        isOpen={editPortfolioModalOpen}
        onRequestClose={closeEditPortfolioModal}
      >
        <div className="modalContent">
          <h2>Edit Portfolio Item</h2>
          <form>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={selectedPortfolio?.title || ""}
                onChange={handlePortfolioChange}
              />
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={selectedPortfolio?.description || ""}
                onChange={handlePortfolioChange}
              />
            </label>
            <label>
              Link:
              <input
                type="text"
                name="link"
                value={selectedPortfolio?.link || ""}
                onChange={handlePortfolioChange}
              />
            </label>
            <label>
              Technologies:
              <input
                type="text"
                name="technologies"
                value={selectedPortfolio?.technologies.join(", ") || ""}
                onChange={(e) =>
                  handlePortfolioChange({
                    target: {
                      name: "technologies",
                      value: e.target.value.split(", "),
                    },
                  })
                }
              />
            </label>
          </form>
          <button
            onClick={savePortfolioChanges}
            style={{ backgroundColor: "green" }}
          >
            Save Changes
          </button>
          <button
            onClick={closeEditPortfolioModal}
            style={{ backgroundColor: "red" }}
          >
            Close
          </button>
        </div>
      </Modal>
      <Modal isOpen={editSkillsModalOpen} onRequestClose={closeEditSkillsModal}>
        <div className="modalContent">
          <h2>Edit Skills</h2>
          <form>
            {skills.map((skill, index) => (
              <label key={index}>
                Skill {index + 1}:
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillsChange(index, e.target.value)}
                />
              </label>
            ))}
          </form>
          <button
            onClick={closeEditSkillsModal}
            style={{ backgroundColor: "red" }}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Accounts;
