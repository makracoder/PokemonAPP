import { useEffect, useState } from "react";
import { Pokemon } from "./Pokemon";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <>
      {/* Moon Toggle */}
      <button
        className="dark-toggle"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <Pokemon />
    </>
  );
};
