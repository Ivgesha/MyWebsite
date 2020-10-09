import React, { useState } from "react";
import SkillsAux from "./SkillsAux";
import SkillsData from "../data/SkillsData"

// make the id dynamic!
function Skill() {
  const [skills,setSkills] = useState(SkillsData);
  
  return (
    <div>
      <h3>02.My skills</h3>
      {skills.map((skill) => {
        return <SkillsAux key={skill.id} name={skill.name} />;
      })}
    </div>
  );
}

export default Skill;
