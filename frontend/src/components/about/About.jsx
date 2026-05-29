import React from "react";
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";
const CV = "https://drive.google.com/uc?export=download&id=1KVHTM-3R8AhblHauD-2xC0r7wKPC1nhQ";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            I build end-to-end data-driven solutions that deliver clear insights and actionable outcomes. With years of experience in data science and a track record of successful projects, I help clients unlock the full potential of their data through effective analytics and machine learning.
          </p>

          <a download="" href={CV} className="button button--flex">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
