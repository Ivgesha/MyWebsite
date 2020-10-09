import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import projectCardData from "../data/ProjectCardData";

function ProjectCardAux() {
  const [projects] = useState(projectCardData)

  return (
    <div>
      {projects.map((project) => {
        return (
          <ProjectCard
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
export default ProjectCardAux;
