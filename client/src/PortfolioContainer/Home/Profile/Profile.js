import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Dhruv</span>.
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <p>
                  I'm a{" "}
                  <Typical
                    loop={Infinity}
                    wrapper="n"
                    steps={[
                      "College Student 📚",
                      2500,
                      "Developer 💻",
                      2500,
                      "Tech Enthusiast 🤖",
                      2500,
                    ]}
                  />
                </p>
              </h1>
              <span className="profile-role-tagline">
                You can find me here:
              </span>
            </span>
          </div>
          <div className="colz">
            <div className="one">
              <a href="mailto:dhruvyalamanchi9@gmail.com">
                <i className="fa fa-envelope icon"></i>
              </a>
            </div>
            <div className="two">
              <a href="https://www.linkedin.com/in/dhruvyalamanchi/">
                <i className="fa fa-linkedin icon"></i>
              </a>
            </div>
            <div className="three">
              <a href="https://github.com/code1word">
                <i className="fa fa-github icon"></i>
              </a>
            </div>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Let's Chat{" "}
            </button>
            <a href="Resume.pdf" download="Dhruv Yalamanchi.pdf">
              <button className="btn highlighted-btn">
                View Resume <i class="fa fa-download"></i>
              </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
