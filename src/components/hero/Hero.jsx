import React from "react";
import "./hero.scss";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>TAAHA HUSSAIN KHAN</h2>
          <h1>Full Stack Web Developer</h1>
          <div className="buttons">
            <button>See the latest works</button>
            <button>Contact Me</button>
          </div>
          <img src="/scroll.png" alt="" srcset="" />
        </div>
      </div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" srcset="" />
      </div>
    </div>
  );
};
