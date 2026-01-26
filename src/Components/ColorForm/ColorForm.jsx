import "./ColorForm.css";
import { useState } from "react";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({ onAddColor, initialData }) {
  const [inputValue, setInputValue] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();
    onAddColor(inputValue);
    setInputValue(inputValue);
  }

  function handleChange(name, value) {
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input
        type="text"
        name="role"
        className="role-input"
        id="role"
        value={inputValue.role}
        onChange={(e) => handleChange("role", e.target.value)}
      />

      <label htmlFor="hex">Hex</label>
      <ColorInput
        id="hex"
        value={inputValue.hex}
        onChange={(value) => handleChange("hex", value)}
      />

      <label htmlFor="contrast">Contrast text</label>
      <ColorInput
        id="contrastText"
        value={inputValue.contrastText}
        onChange={(value) => handleChange("contrastText", value)}
      />

      <button type="submit">ADD COLOR</button>
    </form>
  );
}
