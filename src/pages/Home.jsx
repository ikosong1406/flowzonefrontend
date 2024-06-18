import React, { useState, useEffect } from "react";
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

const Home = () => {
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
    // console.log(userData); // This will log the updated userData
  }, [userData]); // Run this effect whenever userData changes;

  const handleRefresh = async () => {
    setRefreshing(true);
    await getData(token);
  };

  const [showMoreDetails, setShowMoreDetails] = useState(false);

  const handleMoreDetailsClick = () => {
    setShowMoreDetails(!showMoreDetails);
  };

  return (
    <div className="homeMain">
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
            <div className="homeDiv2121">
              <img src={cube} alt="Project Icon" />
            </div>
            <div className="homeDiv2122">
              <h2>Project Name</h2>
              <div className="homeDiv21221">
                <p style={{ color: "#a09e9e", marginTop: -5 }}>
                  <IoPricetag style={{ marginRight: 5 }} />
                  Web Development
                </p>
                <p style={{ color: "#a09e9e", marginTop: -5 }}>
                  <IoPricetag style={{ marginRight: 5 }} />
                  Web Development
                </p>
                <p style={{ color: "#a09e9e", marginTop: -5 }}>
                  <IoPricetag style={{ marginRight: 5 }} />
                  Web Development
                </p>
              </div>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                labore voluptatem quia dolorum harum, nostrum blanditiis
                expedita, obcaecati, id exercitationem eaque rem! Corporis
                dolore voluptatum deleniti dolorum quisquam distinctio soluta.
              </h3>
              <div className="homeDiv21222">
                <h3>React Native</h3>
                <h3>React Native</h3>
              </div>
              <button className="actionButton" onClick={handleMoreDetailsClick}>
                {showMoreDetails ? "Show Less Details" : "More Details"}
              </button>
              {showMoreDetails && (
                <div className="moreDetails">
                  <p>
                    Molestias possimus non sint explicabo, atque aliquam
                    delectus inventore ipsa saepe eligendi itaque minus, animi
                    laborum neque fugit facere? Totam.
                  </p>
                  <button className="joinButton">Join Project</button>
                </div>
              )}
            </div>
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
