import React, { useState } from "react";
import "../styles/Login.css";
import { NavLink, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { MdEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import axios from "axios";
import BackendApi from "../Api/BackendApi";
import { storeUserToken } from "../Api/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com)$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const userData = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${BackendApi}/login`, userData);
      const { status, data, token } = response.data;

      if (status === "ok") {
        toast.success(data);
        storeUserToken(token);
        navigate("/dashboard");
      } else {
        toast.error(data);
      }
    } catch (error) {
      toast.error("Login error: " + error.message);
    }
  };

  return (
    <div className="loginDiv1">
      <ToastContainer />
      <div className="loginDiv3"></div>
      <div className="loginDiv2">
        <div className="loginDiv21">
          <NavLink to="/" className="logoDiv">
            <img src={logo} className="logoImage" />
            <h1 className="logoName">
              <span style={{ color: "#0070C0" }}>Flow</span>Zone
            </h1>
          </NavLink>
        </div>
        <div className="loginDiv22">
          <h1>Welcome Back</h1>
          <h3>Login To Your Account</h3>
        </div>
        <div className="loginDiv23">
          <h3>
            <MdEmail />
            <span style={{ marginLeft: 10 }}>Email</span>
          </h3>
          <input
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h3>
            <GiPadlock />
            <span style={{ marginLeft: 10 }}>Password</span>
          </h3>
          <input
            type="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <h4>Forgot Password ?</h4>
          <Link onClick={handleLogin} className="loginDiv23Btn">
            <h3>LOGIN</h3>
          </Link>
        </div>
        <div className="loginDiv24">
          <hr />
          <h4>or</h4>
          <hr />
        </div>
        <div className="loginDiv26">
          <h3>
            Don't have an account?{" "}
            <span>
              <Link
                style={{ color: "#0070C0", textDecoration: "none" }}
                to="/register"
              >
                Sign Up
              </Link>
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
