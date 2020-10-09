import React, { useState } from "react";
import "./App.css";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectCards from "./components/ProjectCards";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="main">
      <Introduction />
      <About />
      <Skills />
      <ProjectCards />
      <Footer/>
    </div>
  );
}

export default App;
