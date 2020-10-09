import React, { useState } from "react";
import Skills from "./Skills";

// make the id dynamic!
function SkillAux() {
  const [skills] = useState([
    { id: 1, name: "C" },
    { id: 2, name: "C++" },
    { id: 3, name: "Java" },
    { id: 4, name: "JavaScript" },
    { id: 6, name: "CSS" },
    { id: 7, name: "HTML" },
    { id: 8, name: "XML" },
    { id: 9, name: "Assembly X86" },
    { id: 10, name: "SQL" },
    { id: 11, name: "React.js" },
    { id: 12, name: "Node.js" },
    { id: 13, name: "bash/shell" },
    { id: 14, name: "Design patterns" },
    { id: 15, name: "Object oriented programming" },
    { id: 16, name: "Linux" },
    { id: 17, name: "MySQL" },
    { id: 18, name: "Network communication" },
    { id: 19, name: "Github" },
    { id: 20, name: "MongoDB" },
    { id: 21, name: "firebase" },
  ]);

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
