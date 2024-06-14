import React from "react";
import "../styles/Login.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo.png";

const Login = () => {
  return (
    <div className="loginDiv1">
      <div className="loginDiv2">
        <div className="loginDiv21">
          <NavLink to="/" className="logoDiv">
            <img src={logo} className="logoImage" />
            <h1 className="logoName">Flowzone</h1>
          </NavLink>
        </div>
        <div className="loginDiv22">
          <h1>Welcome Back</h1>
          <h3>Enter your email and password to login</h3>
        </div>
        <div className="loginDiv23">
          <h3>Email</h3>
          <input type="text" name="" id="" />
          <h3>Password</h3>
          <input type="text" name="" id="" />
          <h4>Forgot Password ?</h4>
          <Link to="/dashboard" className="loginDiv23Btn">
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
                style={{ color: "#8a24dd", textDecoration: "none" }}
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
