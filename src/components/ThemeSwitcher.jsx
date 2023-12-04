import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa6";

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode} className="text-2xl">
      {darkMode ? <FaSun /> : <FaMoon />}
    </button>
  );
}

export default ThemeSwitcher;
