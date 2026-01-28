import "./ColorForm.css";
import { useState } from "react";
import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  onSubmit,
  initialData,
  buttonText,
  className,
}) {
  const [inputValue, setInputValue] = useState(initialData);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(inputValue);
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
      <div className="label-container">
        <label htmlFor="role">
          Role
          <br />
          <input
            type="text"
            name="role"
            className="role-input"
            id="role"
            aria-label="role input"
            value={inputValue.role}
            onChange={(e) => handleChange("role", e.target.value)}
          />
        </label>

        <label htmlFor="hex">
          Hex{" "}
          <ColorInput
            id="hex"
            value={inputValue.hex}
            onChange={(value) => handleChange("hex", value)}
          />
        </label>

        <label htmlFor="contrast">
          Contrast text
          <ColorInput
            id="contrastText"
            value={inputValue.contrastText}
            onChange={(value) => handleChange("contrastText", value)}
          />
        </label>
      </div>
      <button className={className} type="submit">
        {buttonText}
      </button>
    </form>
  );
}
