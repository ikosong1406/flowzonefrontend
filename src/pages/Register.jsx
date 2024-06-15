import React from "react";
import "../styles/Register.css";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/logo.png";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";

const Register = () => {
  return (
    <div className="registerDiv1">
      <div className="registerDiv2">
        <div className="registerDiv21">
          <NavLink to="/" className="logoDiv">
            <img src={logo} className="logoImage" />
            <h1 className="logoName">
              <span style={{ color: "#33067B" }}>Flow</span>Zone
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
          <input type="text" name="" id="" />
          <h3>
            <FaUser />
            <span style={{ marginLeft: 10 }}>Last Name</span>
          </h3>
          <input type="text" name="" id="" />
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
          <h3>
            <GiPadlock />
            <span style={{ marginLeft: 10 }}>Confirm Password</span>
          </h3>
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
                style={{ color: "#33067B", textDecoration: "none" }}
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
