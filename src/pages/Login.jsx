import React from "react";
import "../styles/Login.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo.png";
import { MdEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";

const Login = () => {
  return (
    <div className="loginDiv1">
      <div className="loginDiv2">
        <div className="loginDiv21">
          <NavLink to="/" className="logoDiv">
            <img src={logo} className="logoImage" />
            <h1 className="logoName">
              <span style={{ color: "#33067B" }}>Flow</span>Zone
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
          <input type="text" name="" id="" />
          <h3>
            <GiPadlock />
            <span style={{ marginLeft: 10 }}>Password</span>
          </h3>
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
                style={{ color: "#33067B", textDecoration: "none" }}
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
