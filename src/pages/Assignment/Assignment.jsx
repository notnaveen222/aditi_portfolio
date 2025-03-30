import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Assignments.css";
import { Link } from "react-router-dom";

const Assignment = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="assignment-title">My Assignments</div>
        <div className="assignment-list">
          <Link to={"/assignment1"} className="assignment-button">
            Assignment 1
          </Link>
          <Link to={"/assignment2"} className="assignment-button">
            Assingment 2
          </Link>
          <Link to={"/assignment3"} className="assignment-button">
            Assingment 3
          </Link>
          <Link to={"/assignment4"} className="assignment-button">
            Assingment 4
          </Link>
          <Link to={"/assignment5"} className="assignment-button">
            Assingment 5
          </Link>
          <Link to={"/assignment6"} className="assignment-button">
            Assingment 6
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
