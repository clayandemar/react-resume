import React from "react";
import "../App.css";
import image from "./images/Clay 2.jpg"

const Header = () => {


  return (
    <header>
      <h1>Clay Andemar</h1>
      <h2>Full Stack Developer</h2>
      <img src={image} alt="Profile of Clay Andemar" width="100px" height="100px"></img>
    </header>
  )
}

export default Header