import React, { useState } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import About from "./components/About";
import SkillAux from "./components/SkillAux";
import ProjectCardAux from "./components/ProjectCardAux";

function App() {
  return (
    <div className="main">
      <Introduction />
      <About />
      <SkillAux />
      <ProjectCardAux />
    </div>
  );
}

export default App;
