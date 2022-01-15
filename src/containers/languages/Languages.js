import React from "react";
import "./Languages.scss";
import {illustration, languages} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/Get started.json";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Languages() {
  if (languages.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Language Proficiency</h1>
            {languages.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.Proficiency
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Language}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="skills-image">
            {illustration.animated ? (
              <DisplayLottie animationData={Build} />
            ) : (
              <img
                alt="Skills"
                src={require("../../assets/images/skill.svg")}
              />
            )}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}