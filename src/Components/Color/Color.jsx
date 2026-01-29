import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";
import { useState } from "react";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
import ContrastChecker from "../ContrastChecker/ContrastChecker";

export default function Color({
  key,
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
      <CopyToClipboard value={color} />
      <ContrastChecker color={color} contrastColor={contrast} />
      <p className="color-card-role">{role}</p>
      <p>contrast: {contrast}</p>
      {!showDelete && (
        <button className="button" onClick={() => setShowDelete(true)}>
          DELETE
        </button>
      )}
      {!showEdit && (
        <button className="button" onClick={() => setShowEdit(true)}>
          EDIT
        </button>
      )}
      {showDelete && (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button className="button" onClick={() => setShowDelete(false)}>
            Cancel
          </button>
          <button className="button" onClick={() => onDelete(id)}>
            Delete
          </button>
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
            className="update__color button"
          />
          <button onClick={() => setShowEdit(false)}>CANCEL</button>
        </>
      )}
    </div>
  );
}
