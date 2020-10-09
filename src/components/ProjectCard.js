import React from "react";
import secureVaultLogo from "../images/secureVaultLogo.png";

function ProjectCard(props) {
  const buttonName = "<script/>";
  
  //   function handleClick() {
  //     window.location = props.giturl;
  //   }
  return (
    <div className="project-card">
      <h2>{props.projectName}</h2>
      <img src={props.logo} />
      <p>{props.description}</p>
      <button>
        <a href={props.giturl}>
        {buttonName}
        </a>
      </button>
    </div>
  );
}

export default ProjectCard;
