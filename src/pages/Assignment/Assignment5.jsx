import React, { useEffect, useState } from "react";
import "./assignment5.css";

const Assignment5 = () => {
  // Q1 - Traffic Light
  const [currentLight, setCurrentLight] = useState("red");
  useEffect(() => {
    const lights = ["red", "yellow", "green"];
    let index = 0;
    const interval = setInterval(() => {
      setCurrentLight(lights[index]);
      index = (index + 1) % lights.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Q3 - Guess the Number
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const checkGuess = () => {
    const userGuess = parseInt(guess);
    if (!userGuess) return;
    setAttempts(attempts + 1);
    if (userGuess === randomNumber) {
      setMessage(`🎉 You guessed it in ${attempts + 1} attempts!`);
    } else if (userGuess > randomNumber) {
      setMessage("⬆️ Too high! Try again.");
    } else {
      setMessage("⬇️ Too low! Try again.");
    }
  };

  // Q4 - To-Do List
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Q5 - Draw Shapes
  useEffect(() => {
    const drawCircle = () => {
      const canvas = document.getElementById("circleCanvas");
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.arc(75, 75, 50, 0, Math.PI * 2);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();
    };
    const drawSquare = () => {
      const canvas = document.getElementById("squareCanvas");
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "blue";
      ctx.fillRect(25, 25, 100, 100);
    };
    const drawTriangle = () => {
      const canvas = document.getElementById("triangleCanvas");
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(75, 25);
      ctx.lineTo(25, 125);
      ctx.lineTo(125, 125);
      ctx.closePath();
      ctx.fillStyle = "green";
      ctx.fill();
    };
    drawCircle();
    drawSquare();
    drawTriangle();
  }, []);

  // Q6 - Random Emoji Generator
  const emojis = ["😀", "😂", "😎", "🥳", "😜", "😇", "🤩", "😈", "👻", "💀"];
  const [emoji, setEmoji] = useState("😀");
  const generateEmoji = () => {
    setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
  };

  return (
    <div className="a5-container">
      {/* Q1 - Traffic Light */}
      <h2>Q1 - Traffic Light</h2>
      <div className="traffic-light">
        {["red", "yellow", "green"].map((color) => (
          <div
            key={color}
            className={`light ${color} ${
              currentLight === color ? "active" : ""
            }`}
          ></div>
        ))}
      </div>

      {/* Q2 - Flames Animation */}
      <h2>Q2 - Flames Animation</h2>
      <div className="fire">
        <div className="flame"></div>
        <div className="flame"></div>
        <div className="flame"></div>
      </div>

      {/* Q3 - Guess the Number */}
      <h2>Q3 - Guess the Number (1-100)</h2>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />
      <button onClick={checkGuess}>Guess</button>
      <p>{message}</p>

      {/* Q4 - To-Do List */}
      <h2>Q4 - To-Do List</h2>
      <div className="todo-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <ul>
          {tasks.map((t, i) => (
            <li key={i}>
              {t}{" "}
              <button className="delete" onClick={() => removeTask(i)}>
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Q5 - Draw Shapes */}
      <h2>Q5 - Draw Shapes</h2>
      <canvas id="circleCanvas" width="150" height="150"></canvas>
      <canvas id="squareCanvas" width="150" height="150"></canvas>
      <canvas id="triangleCanvas" width="150" height="150"></canvas>

      {/* Q6 - Random Emoji Generator */}
      <h2>Q6 - Random Emoji Generator</h2>
      <div className="emoji">{emoji}</div>
      <button onClick={generateEmoji}>Generate Emoji</button>
    </div>
  );
};

export default Assignment5;
