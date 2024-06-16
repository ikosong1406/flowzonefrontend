import React from "react";
import "../styles/Accounts.css";
import person from "../images/person.jpeg";
import { IoPricetag } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

const Accounts = () => {
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
            <h2>Alexander Virtuous Ikosong</h2>
            <p style={{ color: "#a09e9e", marginTop: -5 }}>
              <IoPricetag />
              <span style={{ marginLeft: 10 }}>Full-stack Developer</span>
            </p>
            <h3>Collaboration Done: 26</h3>
            <h3>Bio:</h3>
            <p style={{ marginTop: -10 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              repudiandae! Accusamus laborum voluptatum eius dignissimos minima
              unde labore ad nesciunt.
            </p>
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
              <h3>email@gmail.com</h3>
            </div>
            <div className="accountDiv2211">
              <h3>
                <MdOutlineWork style={{ marginRight: 5 }} />
                Industry:
              </h3>
              <h3>Web Development</h3>
            </div>
            <div className="accountDiv2211">
              <h3>
                <FaCalendarAlt style={{ marginRight: 5 }} />
                Date of Birth:
              </h3>
              <h3>14 June 2004</h3>
            </div>
            <div className="accountDiv2211">
              <h3>
                <FaFilePdf style={{ marginRight: 5, color: "red" }} />
                Attachment:
              </h3>
              <h3>alexandra.pdf</h3>
            </div>
          </div>
          <div className="accounDiv222">
            <FaEdit />
          </div>
        </div>
      </div>
      <div className="accountDiv3">
        <div className="accountDiv31">
          <h3>Portfolio Items</h3>
        </div>
        <div className="accountDiv32">
          <div className="accountDiv321">
            <h3>My Skills</h3>
          </div>
          <div className="accountDiv322">
            <h3>My Recommendations</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
