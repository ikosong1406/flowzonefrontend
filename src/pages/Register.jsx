import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "../styles/Register.css";
import logo from "../images/logo.png";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      toast.error("Please fill out all fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const userData = {
      firstname,
      lastname,
      email,
      password,
    };

    try {
      const response = await axios.post(`${BackendApi}/register`, userData);
      const { status, data } = response.data;

      if (status === "ok") {
        toast.success(data);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      } else {
        toast.error(data);
      }
    } catch (error) {
      toast.error("Registration error: " + error.message);
    }
  };

  return (
    <div className="registerDiv1">
      <ToastContainer />
      <div className="registerDiv3"></div>
      <div className="registerDiv2">
        <div className="registerDiv21">
          <NavLink to="/" className="logoDiv">
            <img src={logo} className="logoImage" />
            <h1 className="logoName">
              <span style={{ color: "#0070C0" }}>Flow</span>Zone
            </h1>
          </NavLink>
        </div>
        <div className="registerDiv22">
          <h1>Get Started</h1>
          <h3>Create An Account</h3>
        </div>
        <div className="registerDiv23">
          <h3>
            <FaUser />
            <span style={{ marginLeft: 10 }}>First Name</span>
          </h3>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <h3>
            <FaUser />
            <span style={{ marginLeft: 10 }}>Last Name</span>
          </h3>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <h3>
            <MdEmail />
            <span style={{ marginLeft: 10 }}>Email</span>
          </h3>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>
            <GiPadlock />
            <span style={{ marginLeft: 10 }}>Password</span>
          </h3>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h3>
            <GiPadlock />
            <span style={{ marginLeft: 10 }}>Confirm Password</span>
          </h3>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Link className="registerDiv23Btn" onClick={handleSubmit}>
            <h3>REGISTER</h3>
          </Link>
        </div>
        <div className="registerDiv24">
          <hr />
          <h4>or</h4>
          <hr />
        </div>
        <div className="registerDiv26">
          <h3>
            Don't have an account?{" "}
            <span>
              <Link
                style={{ color: "#0070C0", textDecoration: "none" }}
                to="/login"
              >
                Login
              </Link>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Register;
