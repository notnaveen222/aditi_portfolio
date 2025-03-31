import React, { useState, useEffect, useRef } from "react";
import "./assignment6.css";

export default function Assignment6() {
  // State for Question 1 (Digital Clock)
  const [currentTime, setCurrentTime] = useState(new Date());

  // State for Question 3 (Flashlight Text)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // State for Question 5 (Vertical Image Slider)
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    "https://picsum.photos/id/237/300/400",
    "https://picsum.photos/id/238/300/400",
    "https://picsum.photos/id/239/300/400",
    "https://picsum.photos/id/240/300/400",
  ];

  // State for Question 7 (Webcam)
  const [stream, setStream] = useState(null);
  const [screenshot, setScreenshot] = useState(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  // State for Question 8 (Mobile Flashlight)
  const [flashlightOn, setFlashlightOn] = useState(false);
  const [flashlightSupported, setFlashlightSupported] = useState(false);

  // Digital Clock Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Webcam functions
  const startWebcam = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing webcam:", err);
    }
  };

  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const takeScreenshot = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0);
      setScreenshot(canvasRef.current.toDataURL("image/png"));
    }
  };

  const startRecording = () => {
    if (!stream) return;

    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      setRecordedChunks(blob);
    };

    recorder.start();
    setRecording(true);
    setMediaRecorder(recorder);
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  const downloadRecording = () => {
    if (recordedChunks) {
      const url = URL.createObjectURL(recordedChunks);
      const a = document.createElement("a");
      a.href = url;
      a.download = "recording.webm";
      a.click();
    }
  };

  // Flashlight functions
  const toggleFlashlight = async () => {
    if (!flashlightOn) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
        });
        const track = mediaStream.getVideoTracks()[0];

        if ("torch" in track.getCapabilities()) {
          await track.applyConstraints({ advanced: [{ torch: true }] });
          setFlashlightOn(true);
          setFlashlightSupported(true);
          setStream(mediaStream); // Store stream to turn off later
        } else {
          alert("Your device doesn't support flashlight control");
          setFlashlightSupported(false);
        }
      } catch (err) {
        console.error("Error accessing flashlight:", err);
      }
    } else {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
        setFlashlightOn(false);
      }
    }
  };

  // Image Slider functions
  const imageCount = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % imageCount);
    }, 3000);
    return () => clearInterval(timer);
  }, [imageCount]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % imageCount);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + imageCount) % imageCount);
  };

  // Flashlight Text mouse movement
  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="assignment-container">
      <h1 className="main-title">Assignment 6</h1>

      {/* Question 1: Digital Clock */}
      <div className="section">
        <h2>Question 1: Digital Clock</h2>
        <div className="digital-clock-container">
          <div className="digital-clock">
            <span className="time-unit">
              {currentTime.getHours().toString().padStart(2, "0")}
            </span>
            <span className="time-separator">:</span>
            <span className="time-unit">
              {currentTime.getMinutes().toString().padStart(2, "0")}
            </span>
            <span className="time-separator">:</span>
            <span className="time-unit">
              {currentTime.getSeconds().toString().padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      {/* Question 2: Analog Clock */}
      <div className="section">
        <h2>Question 2: Analog Clock</h2>
        <div className="analog-clock-container">
          <div className="analog-clock">
            {/* Clock numbers */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
              <div
                key={num}
                className="clock-number"
                style={{
                  ...getClockNumberPosition(num),
                }}
              >
                {num}
              </div>
            ))}

            {/* Clock center point */}
            <div className="clock-center"></div>

            {/* Hour hand */}
            <div
              className="hour-hand-container"
              style={{
                transform: `rotate(${
                  (currentTime.getHours() % 12) * 30 +
                  currentTime.getMinutes() * 0.5
                }deg)`,
              }}
            >
              <div className="hour-hand"></div>
            </div>

            {/* Minute hand */}
            <div
              className="minute-hand-container"
              style={{
                transform: `rotate(${currentTime.getMinutes() * 6}deg)`,
              }}
            >
              <div className="minute-hand"></div>
            </div>

            {/* Second hand */}
            <div
              className="second-hand-container"
              style={{
                transform: `rotate(${currentTime.getSeconds() * 6}deg)`,
              }}
            >
              <div className="second-hand"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Question 3: Flashlight Text */}
      <div className="section">
        <h2>Question 3: Flashlight Text</h2>
        <div className="flashlight-container" onMouseMove={handleMouseMove}>
          <div className="flashlight-background"></div>

          <div
            className="flashlight"
            style={{
              top: `${mousePosition.y - 800}px`,
              left: `${mousePosition.x - 800}px`,
            }}
          ></div>

          <div className="flashlight-box">Flashlight Text</div>
        </div>
      </div>

      {/* Question 4: Minion Eyes */}
      <div className="section">
        <h2>Question 4: Minion Eyes</h2>
        <div className="minion-container">
          <div className="minion-strap"></div>

          <div className="minion-goggles">
            <div className="minion-goggles-frame"></div>

            {[1, 2].map((eye, index) => (
              <MinionEye key={index} />
            ))}
          </div>
        </div>
      </div>

      {/* Question 5: Vertical Image Slider */}
      <div className="section">
        <h2>Question 5: Vertical Image Slider</h2>
        <div className="slider-container">
          <div className="slider-wrapper">
            <button className="slider-button prev-button" onClick={prevSlide}>
              ↑
            </button>

            <div className="slider-content">
              <div
                className="slider-track"
                style={{
                  transform: `translateY(-${currentSlide * 400}px)`,
                }}
              >
                {images.map((imageUrl, index) => (
                  <img
                    key={index}
                    src={imageUrl}
                    alt={`Slide ${index + 1}`}
                    className="slider-image"
                  />
                ))}
              </div>
            </div>

            <button className="slider-button next-button" onClick={nextSlide}>
              ↓
            </button>
          </div>
        </div>
      </div>
      {/* Question 6: Snake Game */}
      <div className="section">
        <h2>Question 6: Snake Game</h2>
        <SnakeGame />
      </div>
      {/* Question 7: Webcam */}
      <div className="section">
        <h2>Question 7: Webcam Controller</h2>
        <div className="webcam-container">
          <h3 className="webcam-title">Webcam Controller</h3>

          <video
            ref={videoRef}
            id="webcam"
            autoPlay
            playsInline
            className="webcam-video"
          ></video>

          <canvas
            ref={canvasRef}
            id="canvas"
            style={{ display: "none" }}
          ></canvas>

          {screenshot && (
            <img
              src={screenshot}
              alt="Screenshot"
              className="webcam-screenshot"
            />
          )}

          <div className="webcam-controls">
            <button
              onClick={startWebcam}
              disabled={!!stream}
              className="webcam-button start-button"
            >
              Start Webcam
            </button>

            <button
              onClick={stopWebcam}
              disabled={!stream}
              className="webcam-button stop-button"
            >
              Stop Webcam
            </button>

            <button
              onClick={takeScreenshot}
              disabled={!stream}
              className="webcam-button screenshot-button"
            >
              Take Screenshot
            </button>

            <button
              onClick={startRecording}
              disabled={!stream || recording}
              className="webcam-button record-button"
            >
              Start Recording
            </button>

            <button
              onClick={stopRecording}
              disabled={!recording}
              className="webcam-button stop-record-button"
            >
              Stop Recording
            </button>

            {recordedChunks.size > 0 && (
              <a
                onClick={downloadRecording}
                className="webcam-button download-button"
              >
                Download Recording
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Question 8: Mobile Flashlight */}
      <div className="section">
        <h2>Question 8: Mobile Flashlight</h2>
        <div className="mobile-flashlight-container">
          <div className="mobile-flashlight-content">
            <h3 className="mobile-flashlight-title">Mobile Flashlight</h3>

            <p className="mobile-flashlight-description">
              Use your device's camera flash as a flashlight
            </p>

            <div className="flashlight-icon">💡</div>

            <button
              onClick={toggleFlashlight}
              className={`mobile-flashlight-button ${
                flashlightOn ? "on" : "off"
              }`}
            >
              {flashlightOn ? "Turn Off" : "Turn On"}
            </button>

            <p className="mobile-flashlight-note">
              Note: Works only on compatible mobile devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  // Helper function for analog clock numbers position
  function getClockNumberPosition(num) {
    const angle = num * 30 * (Math.PI / 180);
    const radius = 200;
    const x = 250 + radius * Math.sin(angle) - 15;
    const y = 250 - radius * Math.cos(angle) - 15;

    return { top: `${y}px`, left: `${x}px` };
  }
}

// Minion Eye component
function MinionEye() {
  const eyeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (eyeRef.current) {
        const eye = eyeRef.current;
        const eyeRect = eye.getBoundingClientRect();
        const eyeX = eyeRect.left + eye.clientWidth / 2;
        const eyeY = eyeRect.top + eye.clientHeight / 2;

        const x = e.clientX;
        const y = e.clientY;

        const radian = Math.atan2(x - eyeX, y - eyeY);
        const rotationDegrees = radian * (180 / Math.PI) * -1 + 180;

        eye.style.transform = `rotate(${rotationDegrees}deg)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={eyeRef} className="minion-eye">
      <div className="minion-eyeball">
        <div className="minion-eyeball-reflection"></div>
      </div>
    </div>
  );
}

// Add this after the MinionEye component at the bottom of your file
function SnakeGame() {
  const UNIT = 25;
  const WIDTH = 500;
  const HEIGHT = 500;
  const gameBoardRef = useRef(null);

  const [snake, setSnake] = useState([
    { x: UNIT * 3, y: 0 },
    { x: UNIT * 2, y: 0 },
    { x: UNIT, y: 0 },
    { x: 0, y: 0 },
  ]);
  const [food, setFood] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ x: UNIT, y: 0 });
  const [score, setScore] = useState(0);
  const [gameActive, setGameActive] = useState(true);
  const [paused, setPaused] = useState(false);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Initialize game and draw initial state
  useEffect(() => {
    const canvas = gameBoardRef.current;
    const ctx = canvas.getContext("2d");

    // Initial setup
    ctx.fillStyle = "#212121";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    createFood();
  }, []);

  // Game loop
  useEffect(() => {
    if (!started || paused || !gameActive) return;

    const canvas = gameBoardRef.current;
    const ctx = canvas.getContext("2d");

    const gameLoop = setInterval(() => {
      // Clear canvas
      ctx.fillStyle = "#212121";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      // Draw food
      ctx.fillStyle = "#fdc3d1";
      ctx.fillRect(food.x, food.y, UNIT, UNIT);

      // Draw snake
      ctx.fillStyle = "white";
      ctx.strokeStyle = "#212121";
      snake.forEach((segment) => {
        ctx.fillRect(segment.x, segment.y, UNIT, UNIT);
        ctx.strokeRect(segment.x, segment.y, UNIT, UNIT);
      });

      // Move snake
      moveSnake();
    }, 200);

    return () => clearInterval(gameLoop);
  }, [snake, started, paused, gameActive, food]);

  // Create food at random position
  const createFood = () => {
    const newFood = {
      x: Math.floor(Math.random() * (WIDTH / UNIT)) * UNIT,
      y: Math.floor(Math.random() * (HEIGHT / UNIT)) * UNIT,
    };

    // Make sure food doesn't appear on snake
    const isOnSnake = snake.some(
      (segment) => segment.x === newFood.x && segment.y === newFood.y
    );

    if (isOnSnake) {
      createFood(); // Try again
    } else {
      setFood(newFood);
    }
  };

  // Move snake in current direction
  const moveSnake = () => {
    setSnake((prevSnake) => {
      const newSnake = [...prevSnake];
      const head = {
        x: newSnake[0].x + direction.x,
        y: newSnake[0].y + direction.y,
      };

      // Check if snake ate food
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 1);
        createFood();
      } else {
        newSnake.pop(); // Remove tail if no food eaten
      }

      newSnake.unshift(head); // Add new head

      // Check for collisions
      checkGameOver(head, newSnake);

      return newSnake;
    });
  };

  // Check for game over conditions
  const checkGameOver = (head, snake) => {
    // Wall collision
    if (head.x < 0 || head.x >= WIDTH || head.y < 0 || head.y >= HEIGHT) {
      setGameActive(false);
      setGameOver(true);
      return;
    }

    // Self collision (skip head)
    for (let i = 1; i < snake.length; i++) {
      if (head.x === snake[i].x && head.y === snake[i].y) {
        setGameActive(false);
        setGameOver(true);
        return;
      }
    }
  };

  // Handle keyboard controls
  const handleKeyPress = (event) => {
    if (!started) {
      setStarted(true);
      return;
    }

    // Space bar to pause/unpause
    if (event.keyCode === 32) {
      setPaused((prev) => !prev);
      return;
    }

    // Arrow keys to change direction
    const LEFT = 37,
      UP = 38,
      RIGHT = 39,
      DOWN = 40;

    switch (event.keyCode) {
      case LEFT:
        if (direction.x === 0) setDirection({ x: -UNIT, y: 0 });
        break;
      case RIGHT:
        if (direction.x === 0) setDirection({ x: UNIT, y: 0 });
        break;
      case UP:
        if (direction.y === 0) setDirection({ x: 0, y: -UNIT });
        break;
      case DOWN:
        if (direction.y === 0) setDirection({ x: 0, y: UNIT });
        break;
      default:
        break;
    }
  };

  // Set up and clean up keyboard event listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [direction, started]);

  // Restart game
  const startGame = () => {
    setSnake([
      { x: UNIT * 3, y: 0 },
      { x: UNIT * 2, y: 0 },
      { x: UNIT, y: 0 },
      { x: 0, y: 0 },
    ]);
    setDirection({ x: UNIT, y: 0 });
    setScore(0);
    setGameActive(true);
    setGameOver(false);
    setPaused(false);
    setStarted(false);
    createFood();
  };

  return (
    <div className="snake-game-container">
      <h3 className="snake-game-title">Snake Game</h3>
      <div className="snake-game-instructions">
        Press space to pause or continue
      </div>

      <div className="snake-game-board-container">
        <canvas
          ref={gameBoardRef}
          width={WIDTH}
          height={HEIGHT}
          className="snake-game-board"
        />

        {!started && (
          <button
            onClick={() => setStarted(true)}
            className="snake-game-button start-button-snk"
          >
            Start Game
          </button>
        )}

        {gameOver && (
          <div className="snake-game-over">
            <div className="snake-game-over-text">Game Over!</div>
            <button
              onClick={startGame}
              className="snake-game-button play-again-button"
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      <div className="snake-game-score">Score: {score}</div>
    </div>
  );
}
