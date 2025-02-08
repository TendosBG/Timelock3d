import React, { useState } from "react";
import "../styles/PromptToRequest.css";

const PromptToRequest: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [time, setTime] = useState<number>(1);
  const [price, setPrice] = useState<number>(0);
  const [description, setDescription] = useState<string>("");

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      alert("Please upload a valid image file.");
    }
  };

  const handleSubmit = () => {
    if (!description.trim()) {
      alert("Please enter a description.");
      return;
    }
    console.log("Submitting request:", { image, time, price, description });
  };

  return (
    <div className="request-box">
      <h2 className="title">Create a Request</h2>

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="What's your request?"
        className="textarea"
      ></textarea>

      {/* Image Preview */}
      {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}

      <div className="actions">
        <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input" />
        
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(Math.max(1, Number(e.target.value)))}
          min="1"
          className="input"
          placeholder="Time (sec)"
        />

        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
          step="0.01"
          min="0"
          className="input"
          placeholder="Price (ETH)"
        />

        <button onClick={handleSubmit} className="submit-btn">Submit</button>
      </div>
    </div>
  );
};

export default PromptToRequest;