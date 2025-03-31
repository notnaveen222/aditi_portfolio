import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="navbar">
      <Link to={"/"} class="navbar-button">
        Home
      </Link>
      <Link to={"/assignments"} class="navbar-button">
        Assignments
      </Link>
      <Link to={"/projects"} class="navbar-button">
        Projects
      </Link>
    </div>
  );
};

export default Navbar;
