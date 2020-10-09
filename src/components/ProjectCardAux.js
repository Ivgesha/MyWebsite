import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import secureVaultLogo from "../images/secureVaultLogo.png";
function ProjectCardAux() {
  // dont forger to make the id dyncamic! 
  const [projects] = useState([
    {
      id: 1,
      projectName: "SecureVault",
      logo: secureVaultLogo,
      description: "Save your most important data in your digital vault!",
      giturl: "https://github.com/Ivgesha/SecureVault2019-1",
    },
  ]);

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
