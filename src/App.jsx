// src/App.jsx
import React from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import ThemeToggle from "./Component/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "2rem" }}>
        <h1>Hello Context 👋</h1>
        <p>This is a simple light/dark mode app using React Context.</p>
        <ThemeToggle />

        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            borderRadius: "8px",
            border: "1px solid var(--border-color)",
            backgroundColor: "var(--box-bg)",
          }}
        >
          <p>This box color changes based on your theme!</p>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
