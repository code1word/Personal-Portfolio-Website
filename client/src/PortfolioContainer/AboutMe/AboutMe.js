import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "Hello! I'm a first-year student at Columbia University studying computer science and applied mathematics in the Fu Foundation School of Engineering and Applied Science. I'm very passionate about exploring the application of technology to solve problems and make a meaningful impact. I also have a strong interest in topics like data science and natural language processing, and am constantly looking to further my understanding.",
    highlights: {
      bullets: [
        "Columbia CS Society as a board member",
        "Columbia Data Science Society",
        "Application Development Initiative",
      ],
      heading: "On campus, I'm involved in:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };
  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
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
        </div>
      </div>
    </div>
  );
}
