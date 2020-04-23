import React, { Fragment } from "react";
import "src/styles/skills.css";
import BusinessSkills from "./BusinessSkills";
import TechnicalSkills from "./TechnicalSkills";

const Skills = () => (
  <Fragment>
    <BusinessSkills />
    <TechnicalSkills />
  </Fragment>
);

export default Skills;
