import React from "react";
import Projects from '../pages/Projects';
import '../App.css';

const Navigation = () => {


  return (
    <nav>
      <a class="nav-item" href="./Profile.jsx">About Me</a>
      <a class="nav-item"  href="../pages/Projects.jsx">Projects</a>
    </nav>
  )
}

export default Navigation