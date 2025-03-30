import React from "react";
import "./Projects.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div>
      <Navbar />
      <div className="projects-container">
        <div className="proj-title">My Projects</div>
        <Link to={"/typingtest"} className="proj-heading">
          Typing Speed Test
        </Link>
        <Link to={"/dictionary"} className="proj-heading">
          Dictionary App
        </Link>
        <Link to={"/flappybird"} className="proj-heading">
          Flappy Bird
        </Link>
        <Link to={"/qrgenerator"} className="proj-heading">
          QR Code Generator
        </Link>
        <Link to={"/imgtopdf"} className="proj-heading">
          Image to PDF
        </Link>
      </div>
    </div>
  );
};

export default Projects;
