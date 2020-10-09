import React, { useState } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectCards from "./components/ProjectCards";

function App() {
  return (
    <div className="main">
      <Introduction />
      <About />
      <Skills />
      <ProjectCards />
    </div>
  );
}

export default App;
