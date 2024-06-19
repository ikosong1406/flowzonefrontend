import React, { useState, useEffect } from "react";
import "../styles/Landing.css";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import Colors from "../components/Colors";
import img from "../images/puzzle.png";
import create from "../images/create.png";
import get from "../images/get.png";
import join from "../images/join.png";
import bulb from "../images/bulb.png";
import connect from "../images/connect.png";
import person from "../images/person.jpeg";
import team from "../images/team.png";

const Landing = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <div>
      <div>
        {isLoading ? (
          <div className="spinner-container">
            <Bars
              height="80"
              width="80"
              color={Colors.violet}
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <div className="landMain">
            <div className="landDiv1">
              <div className="landDiv11">
                <h1>
                  Your <span style={{ color: "#0070C0" }}>Network</span> is Your{" "}
                  <span style={{ color: "#0070C0" }}>Networth</span>
                </h1>
                <h2>
                  Join the ultimate platform for developers to build their
                  portfolio, find collaborators, and accelerate their careers.
                </h2>
                <h4>
                  Connect With Like Minds In Your Project. Be Part Of Something
                  Great!
                </h4>
                <Link to="/register" className="landDiv1Btn">
                  Get Started | Join the Flowzone Community
                </Link>
              </div>

              <img src={img} />
            </div>

            <div className="banner">
              <h1>Connect With People around the World</h1>
              <div className="banner1">
                <h1>80k+</h1>
                <h3>Currently using</h3>
              </div>
              <div className="banner1">
                <h1>34k+</h1>
                <h3>Positive reviews</h3>
              </div>
            </div>

            <div className="landDiv2">
              <div className="landDiv21">
                <h1>Create An Account With Your Prefered Tech Sector</h1>
                <h3>
                  Thousands Of Tech Careers To Indulge In and Start Your Tech
                  Journey
                </h3>
              </div>
              <div className="landDiv22">
                <div className="landDiv221">
                  <img src={create} alt="" />
                  <h2>Create A Tech Group</h2>
                  <h3>
                    Connect With People and Create A Tech Group With Different
                    Developers, Designers And Project Managers
                  </h3>
                </div>
                <div className="landDiv221">
                  <img src={join} alt="" />
                  <h2>Join A Tech Group</h2>
                  <h3>
                    Connect With People and Join A Tech Group With Different
                    Developers, Designers And Project Managers
                  </h3>
                </div>
                <div className="landDiv221">
                  <img src={get} alt="" />
                  <h2>Create & Get Inspirations</h2>
                  <h3>
                    Connect with People, Post and Get Inspo on Different
                    Projects They’ve Done
                  </h3>
                </div>
              </div>
            </div>

            <div className="landDiv3">
              <div className="landDiv31">
                <div className="landDiv311">
                  <h1>
                    Connect <span style={{ color: "#0070C0" }}>Developers</span>
                  </h1>
                  <h3>
                    Flowzone connects developers from various roles and skill
                    levels, providing a platform for collaboration and
                    networking. This feature will allow users to find and join
                    projects that match their interests and skills, facilitating
                    meaningful connections and relationships within the
                    community.
                  </h3>
                  <h3>
                    By connecting developers, flowzone will enable the exchange
                    of ideas, expertise, and resources, leading to innovative
                    solutions and growth. Users will be able to learn from each
                    other, share knowledge, and build relationships that can
                    lead to new opportunities, mentorship, and friendships.
                  </h3>
                  <div className="landDiv3111">
                    <Link to="/register" className="landDiv31111">
                      Sign Up
                    </Link>
                    <Link to="/register" className="landDiv31112">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="landDiv312">
                  <img src={team} alt="" />
                </div>
              </div>
              <div className="landDiv31">
                <div className="landDiv312">
                  <img src={gear} alt="" />
                </div>
                <div className="landDiv311">
                  <h1>
                    Facilitate Project{" "}
                    <span style={{ color: "#0070C0" }}>Collaboration</span>
                  </h1>
                  <h3>
                    Flowzone facilitate project collaboration by providing a
                    range of tools and features that enable seamless
                    communication, organization, and progress tracking. Users
                    will be able to create and manage projects, assign tasks,
                    set deadlines, and share resources, all within a single
                    platform.
                  </h3>
                  <h3>
                    By streamlining project collaboration, flowzone will help
                    developers overcome common obstacles such as
                    miscommunication, procrastination, and lack of
                    accountability. With clear goals, roles, and expectations,
                    users will be able to work together efficiently, deliver
                    high-quality results, and build a portfolio of successful
                    projects.
                  </h3>
                  <div className="landDiv3111">
                    <Link to="/register" className="landDiv31111">
                      Sign Up
                    </Link>
                    <Link to="/register" className="landDiv31112">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="landDiv4">
              <div className="landDiv41">
                <h1>
                  What They Say{" "}
                  <span style={{ color: "#0070C0" }}>About Us</span>
                </h1>
              </div>
              <div className="landDiv42">
                <div className="landDiv421">
                  <h2>"Flowzone Helped Me Find My Dream Team"</h2>
                  <h3>
                    I was struggling to find the right collaborators for my
                    project, but Flowzone connected me with talented developers
                    who shared my vision. We delivered a top-notch product and I
                    couldn't be happier!
                  </h3>
                  <div className="landDiv4211">
                    <img src={person} alt="" />
                    <div className="landDiv42111">
                      <h3>Emily Chen</h3>
                      <h4>Project Manager at TechCorp</h4>
                    </div>
                  </div>
                </div>
                <div className="landDiv422">
                  <h2>"From Junior to Senior Dev in No Time"</h2>
                  <h3>
                    Flowzone's resources and mentorship helped me level up my
                    skills in just a few months. I went from a junior developer
                    to a senior dev, and now I'm leading my own projects!
                  </h3>
                  <div className="landDiv4221">
                    <img src={person} alt="" />
                    <div className="landDiv42211">
                      <h3>David Kim</h3>
                      <h4>Senior Developer at StartUpX</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="landDiv43">
                <div className="landDiv431">
                  <h2>"Flowzone Opened Doors to New Opportunities"</h2>
                  <h3>
                    Thanks to Flowzone, I landed my first big client and grew my
                    freelance business. The community support and feedback were
                    invaluable in helping me improve my craft
                  </h3>
                  <div className="landDiv4311">
                    <img src={person} alt="" />
                    <div className="landDiv43111">
                      <h3>Sophia Patel</h3>
                      <h4>Freelance Developer & Designer</h4>
                    </div>
                  </div>
                </div>
                <div className="landDiv431">
                  <h2>"Collaboration Made Easy with Flowzone"</h2>
                  <h3>
                    Flowzone streamlined our project workflow, making it easy to
                    work with team members across different time zones. We
                    delivered our project ahead of schedule and under budget!
                  </h3>
                  <div className="landDiv4311">
                    <img src={person} alt="" />
                    <div className="landDiv43111">
                      <h3>Michael Brown</h3>
                      <h4>Team Lead at DevOps Inc</h4>
                    </div>
                  </div>
                </div>
                <div className="landDiv431">
                  <h2>"A Game-Changer for Career Growth"</h2>
                  <h3>
                    Flowzone's personalized learning paths and mentorship helped
                    me fill knowledge gaps and stay up-to-date with industry
                    trends. I feel confident in my abilities and ready for new
                    challenges!
                  </h3>
                  <div className="landDiv4311">
                    <img src={person} alt="" />
                    <div className="landDiv43111">
                      <h3>Rachel Lee</h3>
                      <h4>Junior Developer at CodeSprint</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="landDiv44">
                <div className="landDiv441">
                  <h1>
                    Whats new at{" "}
                    <span style={{ color: "#0070C0" }}>Flowzone</span>?
                  </h1>
                  <Link>See all</Link>
                </div>
                <div className="landDiv442">
                  <div className="landDiv4421">
                    <h3>SERVICE</h3>
                    <hr />
                    <img src={connect} alt="" />
                    <h2>How To Deliver a Successful Product Launch</h2>
                  </div>
                  <div className="landDiv4421">
                    <h3>SERVICE</h3>
                    <hr />
                    <img src={bulb} alt="" />
                    <h2>
                      What Makes an Authenthic Employee Profile, and Why Does It
                      Matter?
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
