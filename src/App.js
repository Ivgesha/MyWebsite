import React, { useState } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import SkillAux from "./components/SkillAux";

function App() {
  return (
    <div className="main">
      <Introduction />
      <About />
      <SkillAux />
    </div>
  );
}

export default App;
