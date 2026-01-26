import "./Color.css";
import { useState } from "react";

export default function Color({ id, color, role, contrast, onDelete }) {
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div
      className="color-card"
      style={{ backgroundColor: color, color: contrast }}
    >
      <h2 className="color-card-headline">{color}</h2>
      <p className="color-card-role">{role}</p>
      <p>contrast: {contrast}</p>
      {!showConfirm && (
        <button onClick={() => setShowConfirm(true)}>Delete</button>
      )}
      {showConfirm && (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button onClick={() => setShowConfirm(false)}>Cancel</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
    </div>
  );
}
