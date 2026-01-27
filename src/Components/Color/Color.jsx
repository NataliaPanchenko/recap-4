import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";
import { useState } from "react";

export default function Color({
  id,
  color,
  role,
  contrast,
  onDelete,
  onUpdateColor,
}) {
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  function handleUpdateSubmit(updatedColor) {
    onUpdateColor({ ...updatedColor, id });
    setShowEdit(false);
  }

  return (
    <div
      className="color-card"
      style={{ backgroundColor: color, color: contrast }}
    >
      <h2 className="color-card-headline">{color}</h2>
      <p className="color-card-role">{role}</p>
      <p>contrast: {contrast}</p>
      {!showDelete && (
        <button onClick={() => setShowDelete(true)}>DELETE</button>
      )}
      {!showEdit && <button onClick={() => setShowEdit(true)}>EDIT</button>}
      {showDelete && (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button onClick={() => setShowDelete(false)}>Cancel</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </>
      )}
      {showEdit && (
        <>
          <ColorForm
            initialData={{
              role: role,
              hex: color,
              contrastText: contrast,
            }}
            buttonText="UPDATE COLOR"
            onSubmit={handleUpdateSubmit}
          />
          <button onClick={() => setShowEdit(false)}>CANCEL</button>
        </>
      )}
    </div>
  );
}
