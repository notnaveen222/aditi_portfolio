import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Flappybird.css";

export default function FlappyBird() {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const gameRef = useRef({
    bird: {
      x: 100,
      y: 150,
      width: 30,
      height: 30,
      velocity: 0,
      gravity: 0.3,
      jump: -8,
    },
    pipes: [],
    lastPipeTime: 0,
    animationId: null,
  });

  // Adjusted for landscape mode
  const GAP_HEIGHT = 150;
  const PIPE_WIDTH = 30;
  const PIPE_SPEED = 2.5;
  const PIPE_SPAWN_RATE = 1800; // Slightly faster pipe spawning for landscape

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const game = gameRef.current;

    const drawBird = () => {
      ctx.fillStyle = "#FFD700";
      ctx.beginPath();
      ctx.arc(
        game.bird.x + game.bird.width / 2,
        game.bird.y + game.bird.height / 2,
        game.bird.width / 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    };

    const drawPipes = () => {
      ctx.fillStyle = "#2ECC71";
      game.pipes.forEach((pipe) => {
        ctx.fillRect(pipe.x, 0, PIPE_WIDTH, pipe.topHeight);
        ctx.fillRect(
          pipe.x,
          pipe.topHeight + GAP_HEIGHT,
          PIPE_WIDTH,
          canvas.height - pipe.topHeight - GAP_HEIGHT
        );
      });
    };

    const updateBird = () => {
      game.bird.velocity += game.bird.gravity;
      game.bird.y += game.bird.velocity;
    };

    const updatePipes = () => {
      const now = Date.now();
      if (now - game.lastPipeTime > PIPE_SPAWN_RATE) {
        const topHeight =
          Math.random() * (canvas.height - GAP_HEIGHT - 100) + 50;
        game.pipes.push({ x: canvas.width, topHeight });
        game.lastPipeTime = now;
      }
      game.pipes.forEach((pipe) => {
        pipe.x -= PIPE_SPEED;
      });
      if (game.pipes.length > 0 && game.pipes[0].x + PIPE_WIDTH < 0) {
        game.pipes.shift();
        setScore((prev) => prev + 1);
      }
    };

    const checkCollisions = () => {
      const bird = game.bird;
      if (bird.y <= 0 || bird.y + bird.height >= canvas.height) {
        return true;
      }
      for (const pipe of game.pipes) {
        if (
          bird.x + bird.width > pipe.x &&
          bird.x < pipe.x + PIPE_WIDTH &&
          (bird.y < pipe.topHeight ||
            bird.y + bird.height > pipe.topHeight + GAP_HEIGHT)
        ) {
          return true;
        }
      }
      return false;
    };

    const drawGameOver = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#FF5252";
      ctx.font = "36px Arial";
      ctx.textAlign = "center";
      ctx.fillText("Game Over!", canvas.width / 2, canvas.height / 2 - 40);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "24px Arial";
      ctx.fillText(`Score: ${score}`, canvas.width / 2, canvas.height / 2);

      ctx.fillStyle = "#fd06b5";
      ctx.font = "20px Arial";
      ctx.fillText(
        "Press Space to Restart",
        canvas.width / 2,
        canvas.height / 2 + 50
      );
    };

    const drawStartScreen = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#fd06b5";
      ctx.font = "36px Arial";
      ctx.textAlign = "center";
      ctx.fillText("Flappy Bird", canvas.width / 2, canvas.height / 2 - 40);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "24px Arial";
      ctx.fillText(
        "Press Space to Start",
        canvas.width / 2,
        canvas.height / 2 + 20
      );
    };

    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!gameStarted) {
        drawStartScreen();
        game.animationId = requestAnimationFrame(gameLoop);
        return;
      }
      updateBird();
      updatePipes();
      drawBird();
      drawPipes();
      if (checkCollisions()) {
        setGameOver(true);
        cancelAnimationFrame(game.animationId);
        drawGameOver();
        return;
      }
      game.animationId = requestAnimationFrame(gameLoop);
    };

    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        if (!gameStarted) {
          setGameStarted(true);
          game.animationId = requestAnimationFrame(gameLoop);
        } else if (gameOver) {
          resetGame();
        } else {
          game.bird.velocity = game.bird.jump;
        }
      }
    };

    const resetGame = () => {
      game.bird = {
        x: 100,
        y: 150,
        width: 30,
        height: 30,
        velocity: 0,
        gravity: 0.5,
        jump: -10,
      };
      game.pipes = [];
      setScore(0);
      setGameOver(false);
      setGameStarted(true);
      game.animationId = requestAnimationFrame(gameLoop);
    };

    window.addEventListener("keydown", handleKeyDown);
    game.animationId = requestAnimationFrame(gameLoop);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(game.animationId);
    };
  }, [gameOver, gameStarted]);

  return (
    <div className="container">
      <h1 className="title">Flappy Bird</h1>
      <div className="gameContainer">
        <canvas ref={canvasRef} width={800} height={400} className="canvas" />
        <div className="scoreContainer">
          <span className="scoreLabel">Score:</span>
          <span className="scoreValue">{score}</span>
        </div>
      </div>
      <div className="instructions">
        <p>Press SPACE to {gameStarted ? "flap" : "start"}</p>
        {gameOver && <p>Press SPACE to play again</p>}
      </div>
    </div>
  );
}
