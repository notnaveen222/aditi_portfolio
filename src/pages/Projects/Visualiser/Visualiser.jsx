import React, { useRef, useEffect } from "react";
import "./Visualiser.css";

const Visualiser = () => {
  const canvasRef = useRef(null);
  const audioRef = useRef(null);
  const analyzerRef = useRef(null);

  useEffect(() => {
    const audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    const analyzer = audioContext.createAnalyser();
    analyzer.fftSize = 256;
    analyzerRef.current = analyzer;

    const source = audioContext.createMediaElementSource(audioRef.current);
    source.connect(analyzer);
    analyzer.connect(audioContext.destination);

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawVisualizer = () => {
      const bufferLength = analyzer.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      analyzer.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        ctx.fillStyle = `rgb(${barHeight + 100}, 50, 150)`;
        ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
        x += barWidth + 1;
      }

      requestAnimationFrame(drawVisualizer);
    };

    drawVisualizer();
  }, []);

  return (
    <div className="visualiser-container">
      <audio ref={audioRef} controls>
        <source src="your-audio-file.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <canvas ref={canvasRef} width={800} height={300}></canvas>
    </div>
  );
};

export default Visualiser;
