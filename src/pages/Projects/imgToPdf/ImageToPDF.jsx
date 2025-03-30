import React, { useState } from "react";
import { jsPDF } from "jspdf";
import "./imgToPdf.css";

const ImageToPDF = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previewUrls, setPreviewUrls] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([...images, ...files]);

    // Create preview URLs
    const newPreviewUrls = files.map((file) => URL.createObjectURL(file));
    setPreviewUrls([...previewUrls, ...newPreviewUrls]);
  };

  const removeImage = (index) => {
    const newImages = [...images];
    const newPreviewUrls = [...previewUrls];

    // Release object URL to prevent memory leaks
    URL.revokeObjectURL(newPreviewUrls[index]);

    newImages.splice(index, 1);
    newPreviewUrls.splice(index, 1);

    setImages(newImages);
    setPreviewUrls(newPreviewUrls);
  };

  const generatePDF = async () => {
    if (images.length === 0) return;

    setLoading(true);

    const pdf = new jsPDF();
    let isFirstPage = true;

    for (let i = 0; i < images.length; i++) {
      try {
        // Convert image to data URL
        const imgData = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target.result);
          reader.readAsDataURL(images[i]);
        });

        // Create image element to get dimensions
        const img = new Image();
        await new Promise((resolve) => {
          img.onload = resolve;
          img.src = imgData;
        });

        // Calculate dimensions to fit in PDF
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        let imgWidth = img.width;
        let imgHeight = img.height;

        // Scale to fit page
        if (imgWidth > pageWidth || imgHeight > pageHeight) {
          const ratio = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
          imgWidth *= ratio;
          imgHeight *= ratio;
        }

        // Center image on page
        const x = (pageWidth - imgWidth) / 2;
        const y = (pageHeight - imgHeight) / 2;

        // Add new page if not the first image
        if (!isFirstPage) {
          pdf.addPage();
        } else {
          isFirstPage = false;
        }

        pdf.addImage(imgData, "JPEG", x, y, imgWidth, imgHeight);
      } catch (err) {
        console.error("Error processing image:", err);
      }
    }

    pdf.save("images.pdf");
    setLoading(false);
  };

  return (
    <div className="external-container">
      <div className="image-to-pdf-container">
        <h1 className="title">Image to PDF Converter</h1>

        <div className="upload-container">
          <label htmlFor="image-upload" className="upload-button">
            <span>Select Images</span>
            <input
              id="image-upload"
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>

          <button
            className="convert-button"
            onClick={generatePDF}
            disabled={images.length === 0 || loading}
          >
            {loading ? "Creating PDF..." : "Convert to PDF"}
          </button>
        </div>

        {previewUrls.length > 0 && (
          <div className="preview-container">
            <h2>Selected Images ({images.length})</h2>
            <div className="preview-grid">
              {previewUrls.map((url, index) => (
                <div key={index} className="preview-item">
                  <img src={url} alt={`Preview ${index}`} />
                  <button
                    className="remove-button"
                    onClick={() => removeImage(index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageToPDF;
