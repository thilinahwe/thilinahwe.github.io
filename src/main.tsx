import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// ✅ Theme bootstrap (runs before React mounts)
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "light") {
  document.documentElement.classList.remove("dark");
} else {
  // default: dark
  document.documentElement.classList.add("dark");
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);