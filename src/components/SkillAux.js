import React, { useState } from "react";
import Skills from "./Skills";

function SkillAux() {
  const [skills] = useState([
    { name: "C" },
    { name: "C++" },
    { name: "Java" },
    { name: "JavaScript" },
    { name: "CSS" },
    { name: "HTML" },
    { name: "XML" },
    { name: "Assembly X86" },
    { name: "SQL" },
    { name: "React.js" },
    { name: "Node.js" },
    { name: "bash/shell" },
    { name: "Design patterns" },
    { name: "Object oriented programming" },
    { name: "Linux" },
    { name: "MySQL" },
    { name: "Network communication" },
    { name: "Github" },
    { name: "MongoDB" },
    { name: "firebase" },
  ]);

  return (
    <div>
      <h3>02.My skills</h3>
      {skills.map((skill) => {
        return <Skills name={skill.name} />;
      })}
    </div>
  );
}

export default SkillAux;
