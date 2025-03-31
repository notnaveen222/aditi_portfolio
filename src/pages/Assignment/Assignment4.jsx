import React from "react";
import "./assignment4.css";

const Assignment4 = () => {
  return (
    <div className="a4-container">
      {/* Q1 - Rotating and Moving Square */}
      <h2>Q1 - Rotating and Moving Square</h2>
      <div className="q1-square">CSS</div>

      {/* Q2 - Infinite Circular Rotation on Square Path */}
      <h2>Q2 - Infinite Circular Rotation on Square Path</h2>
      <div className="q2-container">
        <div className="q2-moving-circle"></div>
      </div>

      {/* Q3 - Rotated Set of Squares */}
      <h2 style={{ marginBottom: "100px" }}>Q3 - Rotated Set of Squares</h2>
      <div className="q3-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className={`q3-square q3-square${i + 1}`}></div>
        ))}
      </div>

      {/* Q4 - Web Programming Layout */}
      <h2>Q4 - Web Programming Layout</h2>
      <div className="q4-layout">
        <header>Web Programming</header>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="q4-container">
          <div className="q4-main">
            <h2>Main Section</h2>
            <p>This is the main content of the page.</p>
          </div>
          <div className="q4-sidebar">
            <h2>Sidebar</h2>
            <p>This is the sidebar, containing related links or ads.</p>
          </div>
          <div className="q4-article">
            <h2>Article</h2>
            <p>This is a standalone article related to the main content.</p>
          </div>
        </div>
        <footer>&copy; 2025 Your Company. All rights reserved.</footer>
      </div>
    </div>
  );
};

export default Assignment4;
