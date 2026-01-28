import { useState } from "react";
import "./CopyToClipboard.css";

export default function CopyToClipboard({ value }) {
  const [text, setText] = useState("COPY");
  const isCopied = text === "SUCCESSFULLY COPIED";

  async function handleCopyText() {
    try {
      await navigator.clipboard.writeText(value);
      setText("SUCCESSFULLY COPIED");

      setTimeout(() => {
        setText("COPY");
      }, 3000);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <button
      className={isCopied ? "button-successfully" : ""}
      onClick={handleCopyText}
    >
      {text}
    </button>
  );
}
