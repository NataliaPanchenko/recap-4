import { useEffect, useState } from "react";
import "./CopyToClipboard.css";

export default function CopyToClipboard({ value }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopyText() {
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    if (!isCopied) return;

    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <button
      className={isCopied ? "button-successfully" : ""}
      onClick={handleCopyText}
    >
      {isCopied ? "SUCCESSFULLY COPIED" : "COPY"}
    </button>
  );
}
