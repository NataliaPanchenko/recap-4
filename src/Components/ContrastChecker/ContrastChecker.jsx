import { useEffect, useState } from "react";
import "./ContrastChecker.css";

export default function ContrastChecker({ color, contrastColor }) {
  const [overall, setOverall] = useState(null);

  useEffect(() => {
    if (!color || !contrastColor) return;

    async function checkContrast() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              colors: [color, contrastColor],
            }),
          },
        );
        const data = await response.json();
        setOverall(data.overall);
      } catch (e) {
        console.log("Error: ", e);
      }
    }
    checkContrast();
  }, [color, contrastColor]);

  function getContrastClass(overall) {
    switch (overall) {
      case "Yup":
        return "contrast yup";
      case "Kinda":
        return "contrast kinda";
      case "Nope":
        return "contrast nope";
    }
  }

  return (
    <p>
      Overall Contrast Scope:{" "}
      <span className={getContrastClass(overall)}>{overall}</span>
    </p>
  );
}
