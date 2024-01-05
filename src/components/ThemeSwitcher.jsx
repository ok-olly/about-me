import { useState, useEffect } from "react";

import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="z-50 flex rounded-full bg-black/5 p-1 dark:bg-white/90"
    >
      <div
        className={`rounded-full px-2 py-1 ${
          darkMode ? "" : "bg-black/10 duration-500"
        }`}
      >
        <IoMoonOutline className={`${darkMode ? "" : "opacity-0"}`} />
      </div>
      <div className="rounded-full px-2 py-1 dark:bg-black/10 dark:duration-500">
        <IoSunnyOutline className="dark:opacity-0" />
      </div>
    </button>
  );
}

export default ThemeSwitcher;
