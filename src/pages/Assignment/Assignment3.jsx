import React from "react";
import "./assignment3.css";

const Assignment3 = () => {
  return (
    <div className="a3-container">
      {/* Q1 - Column Flexbox */}
      <h2>Q1 - Column Flexbox</h2>
      <div className="q1-container">
        <div className="q1-box"></div>
        <div className="q1-box"></div>
      </div>

      {/* Q2 - Row Flexbox */}
      <h2>Q2 - Row Flexbox</h2>
      <div className="q2-container">
        <div className="q2-box"></div>
        <div className="q2-box"></div>
      </div>

      {/* Q3 - Login Form */}
      <h2>Q3 - Login Form</h2>
      <div className="q3-login-form">
        <h2>Login</h2>
        <form>
          <label>Username</label>
          <input type="text" placeholder="Enter your username" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Login</button>
          <a href="#">Forgot Password?</a>
        </form>
      </div>

      {/* Q4 - Navbar */}
      <h2>Q4 - Navigation Bar</h2>
      <div className="q4-nav">
        <a href="#">Home</a>
        <div className="q4-drop">
          <button className="q4-dropbutton">Services</button>
          <div className="q4-drop-content">
            <a href="#">Web Design</a>
            <a href="#">SEO</a>
            <a href="#">Marketing</a>
          </div>
        </div>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      {/* Q5 - List */}
      <h2>Q5 - List</h2>
      <div className="q5-list">
        <div className="q5-list-header">Home</div>
        <ul className="q5-list-items">
          <li>Services</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Q6 - Projector Screen */}
      <h2>Q6 - Projector Screen</h2>
      <div className="q6-projector-screen">
        <div className="q6-projector-logo">
          <i>acer</i>
        </div>
        <div className="q6-details">
          <div className="q6-qr-code"></div>
          <div>
            XT223H
            <br />
            Projector Information
          </div>
        </div>
        <div className="q6-signal-info">
          <img className="q6-signal-image" src="acer2.jpg" alt="Signal Icon" />
          <div className="q6-signal-text">
            No Signal
            <br />
            VGA IN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment3;
