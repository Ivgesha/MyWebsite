import React from "react";


function ProjectCardAux(props) {
  const buttonName = "<script/>";
  
  return (
    <div className="project-card">
      <h2>{props.projectName}</h2>
      <img src={props.logo} />
      <p>{props.description}</p>
      <a href={props.giturl}>
      <button>{buttonName}</button>
      </a>
    </div>
  );
}

export default ProjectCardAux;
