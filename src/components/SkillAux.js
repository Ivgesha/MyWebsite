import React, { useState } from "react";
import Skills from "./Skills";
import SkillsData from "../data/SkillsData"

// make the id dynamic!
function SkillAux() {
  const [skills,setSkills] = useState(SkillsData);
  
  return (
    <div>
      <h3>02.My skills</h3>
      {skills.map((skill) => {
        return <Skills key={skill.id} name={skill.name} />;
      })}
    </div>
  );
}

export default SkillAux;
