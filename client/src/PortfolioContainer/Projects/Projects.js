import React from "react";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Projects.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="testi-background fade-in screen-container"
      id={props.id || ""}
    >
      <div className="project-section ">
        <ScreenHeading title={"Projects"} />
        <div className="star-description">
          <i class="fa fa-star"></i> =
          <i className="star-description-text"> Notable Project</i>
        </div>
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="ribbon">
                <i class="fa fa-star"></i>
              </div>
              <img
                src={require("../../assets/Projects/Schmaker Logo.png")}
                alt="no internet connection"
              />
              <div className="info">
                <h2>Schmaker</h2>
                <p className="italic">
                  Technologies used: Flask, Bootstrap, SQL
                </p>
                <p>
                  A convenient tool NCSSM students can use to generate their
                  trimester schedules and check for meeting pattern conflicts.
                </p>
                <p className="demo-link">
                  <a href="https://www.youtube.com/watch?v=MNKOXxwGdDM">
                    Watch demo
                  </a>
                </p>
                <a href="https://github.com/code1word/CS50-Final-Project">
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="card">
              <div className="ribbon">
                <i class="fa fa-star"></i>
              </div>
              <img
                src={require("../../assets/Projects/DY Logo.png")}
                alt="no internet connection"
              />{" "}
              <div className="info">
                <h2>Personal Portfolio</h2>
                <p className="italic">
                  Technologies used: React JS, Node JS, Bootstrap
                </p>
                <p>
                  A fully responsive personal portfolio website with email
                  functionality that showcases some of my latest projects.
                </p>
                <a href="https://github.com/code1word">
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="card">
              <img
                src={require("../../assets/Projects/2048 AI Logo.png")}
                alt="no internet connection"
              />
              <div className="info">
                <h2>2048 AI</h2>
                <p className="italic">Libraries used: Selenium, NumPy</p>
                <p>
                  A program that intelligently plays the number game 2048 by
                  implementing a vanilla minimax algorithm. It interacts with a
                  web app version of the game and plays it live.
                </p>
                <a href="https://github.com/code1word/2048-AI">
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="card">
              <img
                src={require("../../assets/Projects/2048 Logo.png")}
                alt="no internet connection"
              />
              <div className="info">
                <h2>2048</h2>
                <p className="italic">Libraries used: Tkinter, NumPy</p>
                <p>
                  A recreation of the classic sliding tile puzzle game. This
                  version of 2048 features an easy-to-use GUI interface that was
                  made using Tkinter.
                </p>
                <a href="https://github.com/code1word/2048">
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="card">
              <img
                src={require("../../assets/Projects/CSG Logo.png")}
                alt="no internet connection"
              />
              <div className="info">
                <h2>Cubic Spline Generator</h2>
                <p className="italic">
                  Libraries used: Qiskit, Matplotlib, NumPy
                </p>
                <p>
                  A tool that closely approximates a curve described by a
                  mathematical function via a cubic spline interpolation,
                  leveraging features of Qiskit along the way.
                </p>
                <a href="https://github.com/code1word/nc-qc-hackathon-summer-2020">
                  <div className="git-hub">
                    <i className="fa fa-github icon"></i>
                    <span>View on GitHub</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
