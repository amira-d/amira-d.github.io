import React, { useContext } from "react";
import "./Podcast.css";
import { podcastSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const { isDark } = useContext(StyleContext);
  return (
  <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>

      <div className="podcast-main-div">
    <img src={require("../../assets/images/CAMP.svg")} style={{height:200}}></img>
      <img src={require("../../assets/images/bike.svg")} style={{height:200}}></img>
        <img src={require("../../assets/images/workout.svg")} style={{height:200}}></img>
          <img src={require("../../assets/images/travel.svg")} style={{height:200}}></img>


      
        </div>
      </div>
    </Fade>
  );
}
