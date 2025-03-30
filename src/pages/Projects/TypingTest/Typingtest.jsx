// TypingSpeedTest.jsx
import React, { useState, useEffect, useRef } from "react";
import "./Typingtest.css";

const Typingtest = () => {
  // Sample text for typing
  const sampleTexts = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "Be the change that you wish to see in the world.",
    "In the middle of difficulty lies opportunity.",
    "Life is what happens when you're busy making other plans.",
  ];

  // Game states
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(15);
  const [gameActive, setGameActive] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [startTime, setStartTime] = useState(null);

  const inputRef = useRef(null);
  const timerRef = useRef(null);

  // Initialize the game
  const initGame = () => {
    // Select a random text from sample texts
    const randomText =
      sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    setText(randomText);
    setUserInput("");
    setTimeLeft(15);
    setGameActive(true);
    setGameOver(false);
    setWpm(0);
    setAccuracy(0);
    setStartTime(Date.now());

    // Focus on input field
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Timer countdown
  useEffect(() => {
    if (gameActive && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameActive) {
      endGame();
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [gameActive, timeLeft]);

  // Check if user completed typing the text
  useEffect(() => {
    if (gameActive && userInput === text) {
      endGame();
    }
  }, [userInput, text, gameActive]);

  // Handle user input
  const handleInputChange = (e) => {
    if (gameActive) {
      setUserInput(e.target.value);
    }
  };

  // End the game and calculate results
  const endGame = () => {
    setGameActive(false);
    setGameOver(true);

    // Calculate actual time taken (in minutes)
    const endTime = Date.now();
    const timeElapsedInMinutes = (endTime - startTime) / 60000;

    // Calculate WPM (words per minute)
    // Assuming average word is 5 characters
    const wordsTyped = userInput.trim().split(" ").length;
    const calculatedWpm = Math.round(wordsTyped / timeElapsedInMinutes);
    setWpm(calculatedWpm);

    // Calculate accuracy
    const correctChars = userInput.split("").filter((char, index) => {
      return index < text.length && char === text[index];
    }).length;

    const calculatedAccuracy =
      Math.round((correctChars / userInput.length) * 100) || 0;
    setAccuracy(calculatedAccuracy);
  };

  return (
    <div className="typing-test-container">
      <div className="TT-title">Typing Speed Test</div>
      <div className="timer-container">
        <div className="timer">Time: {timeLeft}s</div>
      </div>

      {!gameActive && !gameOver && (
        <div className="start-screen">
          <button onClick={initGame} className="start-button">
            Start Test
          </button>
          <p>You'll have 15 seconds to type as fast as you can!</p>
          <p>The test will end when you complete the text or time runs out.</p>
        </div>
      )}

      {gameActive && (
        <div className="game-container">
          <div className="sample-text">
            {text.split("").map((char, index) => {
              let charClass = "";
              if (index < userInput.length) {
                charClass = char === userInput[index] ? "correct" : "incorrect";
              }
              return (
                <span key={index} className={charClass}>
                  {char}
                </span>
              );
            })}
          </div>

          <textarea
            ref={inputRef}
            className="typing-input"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Start typing here..."
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      )}

      {gameOver && (
        <div className="results">
          <h2>Results</h2>
          <p>
            Words Per Minute: <span className="highlight">{wpm}</span>
          </p>
          <p>
            Accuracy: <span className="highlight">{accuracy}%</span>
          </p>
          <p>
            Time used:{" "}
            <span className="highlight">{15 - timeLeft} seconds</span>
          </p>
          <button onClick={initGame} className="restart-button">
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Typingtest;
