import Color from "./Components/Color/Color";
import "./App.css";
import { initialColors } from "./lib/colors";
import ColorForm from "./Components/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";

const INITIAL_DATA = {
  role: "some text",
  hex: "#123456",
  contrastText: "#ffffff",
};

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleAddColor(newColor) {
    setColors((prevColors) => [{ id: uid(), ...newColor }, ...prevColors]);
  }

  function handleDeleteColor(id) {
    setColors((prevColors) => prevColors.filter((color) => color.id !== id));
  }

  function handleUpdateColor(updatedColor) {
    setColors((prevColors) =>
      prevColors.map((color) =>
        color.id === updatedColor.id ? updatedColor : color,
      ),
    );
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm
        initialData={INITIAL_DATA}
        onSubmit={handleAddColor}
        buttonText="ADD COLOR"
      />
      {colors.map((color) => (
        <Color
          id={color.id}
          key={color.id}
          color={color.hex}
          role={color.role}
          contrast={color.contrastText}
          onDelete={handleDeleteColor}
          onUpdateColor={handleUpdateColor}
        />
      ))}
      {colors.length === 0 && <p>No colors... Start by adding one! 🎨</p>}
    </>
  );
}

export default App;
