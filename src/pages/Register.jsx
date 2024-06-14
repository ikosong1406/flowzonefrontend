import React from "react";
import "../styles/Register.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo.png";

const Register = () => {
  return (
    <div className="registerDiv1">
      <div className="registerDiv2">
        <div className="registerDiv21">
          <NavLink to="/" className="logoDiv">
            <img src={logo} className="logoImage" />
            <h1 className="logoName">Flowzone</h1>
          </NavLink>
        </div>
        <div className="registerDiv22">
          <h1>Welcome</h1>
          <h3>Enter your informations to register</h3>
        </div>
        <div className="registerDiv23">
          <h3>First Name</h3>
          <input type="text" name="" id="" />
          <h3>Last Name</h3>
          <input type="text" name="" id="" />
          <h3>Email</h3>
          <input type="text" name="" id="" />
          <h3>Password</h3>
          <input type="text" name="" id="" />
          <h3>Confirm Password</h3>
          <input type="text" name="" id="" />
          <Link to="/register" className="registerDiv23Btn">
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
                style={{ color: "#8a24dd", textDecoration: "none" }}
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
