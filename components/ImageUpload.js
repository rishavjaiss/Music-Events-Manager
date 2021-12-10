import React from "react";
import { API_URL } from "@/config/index";
import { useState } from "react";
import styles from "../styles/Form.module.css";

export default function ImageUpload({ token, eventId, imageUploaded }) {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);
    const formData = new FormData();
    formData.append("files", image);
    formData.append("ref", "events");
    formData.append("refId", eventId);
    formData.append("field", "image");

    const res = await fetch(`${API_URL}/upload`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      body: formData,
    });

    if (res.ok) {
      setUploading(false);
      imageUploaded();
    }
  };
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };
  return (
    <div className={styles.form}>
      <h1>Upload Event Image</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        {uploading && <h6>Uploading Please Wait...</h6>}
        <input type="submit" className="btn" value="Upload" />
      </form>
    </div>
  );
}
