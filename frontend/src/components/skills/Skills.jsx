import React from "react";
import "./skills.css";
import ProgrammingLanguage from "./ProgrammingLanguage";
import Framework from "./Framework";
import Tools from "./Tools";
import Cloud from "./Cloud";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <ProgrammingLanguage />
        <Framework />
        <Tools />
        <Cloud />
      </div>
    </section>
  );
};

export default Skills;
