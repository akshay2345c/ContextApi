// src/components/ThemeToggle.jsx
import React from "react";
import { useTheme } from "../Context/ThemeContext.jsx";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: "0.6rem 1rem",
        borderRadius: "8px",
        border: "1px solid gray",
        background: "transparent",
        cursor: "pointer",
        color: "var(--text-color)",
      }}
    >
      {theme === "light" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
