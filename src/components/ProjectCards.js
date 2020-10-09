import React, { useState } from "react";
import ProjectCardAux from "./ProjectCardAux";
import projectCardData from "../data/ProjectCardData";

function ProjectCards() {
  const [projects] = useState(projectCardData)

  return (
    <div>
      <h3>03.My projects</h3>
      {projects.map((project) => {
        return (
          <ProjectCardAux
            key={project.id}
            projectName={project.projectName}
            logo={project.logo}
            description={project.description}
            giturl={project.giturl}
          />
        );
      })}
    </div>
  );
}
export default ProjectCards;
