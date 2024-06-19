import React, { useState, useEffect, useCallback } from "react";
import "../styles/Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { getUserToken } from "../Api/storage";

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const [userData, setUserData] = useState({});
  const [token, setToken] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

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

  useEffect(() => {}, [userData]);

  const fn = userData?.firstname ? userData.firstname[0] : "";
  const ln = userData?.lastname ? userData.lastname[0] : "";

  return (
    <div className="sideDiv1">
      <div className="sideDiv2">
        <h1 className="logo">
          {fn}
          {ln}
        </h1>
      </div>
      <div className="sideDiv3">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
          end
        >
          <FaHome className="icon" />
        </NavLink>
        <NavLink
          to="/dashboard/chat"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <AiFillMessage className="icon" />
        </NavLink>
        <NavLink
          to="/dashboard/progress"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <FaProjectDiagram className="icon" />
        </NavLink>
        <NavLink
          to="/dashboard/account"
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => setShowNav(false)}
        >
          <FaUser className="icon" />
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
