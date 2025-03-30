import { useState } from "react";
import "./QRCodeGenerator.css";

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [qrCodeUrl, setQRCodeUrl] = useState("");

  const generateQRCode = () => {
    if (text.trim()) {
      setQRCodeUrl(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
          text
        )}`
      );
    }
  };

  return (
    <div className="qr-container">
      <h2 className="qr-title">QR Code Generator</h2>
      <input
        type="text"
        placeholder="Enter text or URL"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="qr-button" onClick={generateQRCode}>
        Generate QR Code
      </button>
      {qrCodeUrl && <img className="qr-image" src={qrCodeUrl} alt="QR Code" />}
    </div>
  );
};

export default QRCodeGenerator;
