import React from "react";
import secureVaultLogo from "../images/secureVaultLogo.png";

function ProjectCard(props) {
  const buttonName = "<script/>";
  const git = "window.location.href=" + props.giturl;
  console.log(git);
  //   function handleClick() {
  //     window.location = props.giturl;
  //   }
  return (
    <div className="project-card">
      <h2>{props.projectName}</h2>
      <img src={props.logo} />
      <p>{props.description}</p>
      <button
        onClick={"window.location.href=" + props.giturl}
        href={props.giturl}
      >
        {buttonName}
      </button>
    </div>
  );
}

export default ProjectCard;
