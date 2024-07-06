"use client";
import { useTheme } from "next-themes";
import React, { useEffect } from "react";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  console.log("🚀 ~ ThemeSwitch ~ theme:", theme);

  useEffect(() => {
    setTheme("dark");
  }, []);

  const handleSwitchTheme = () => {
    setTheme("light");
    if (theme === "dark") {
    } else {
      setTheme("dark");
    }
  };
  return (
    <button
      onClick={handleSwitchTheme}
      className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 dark:bg-blue-700 text-white p-3 rounded-full shadow-md hover:bg-blue-600 dark:hover:bg-blue-800 transition-colors"
    >
      {theme === "dark" ? (
        <i className="fas fa-sun"></i>
      ) : (
        <i className="fas fa-moon"></i>
      )}
    </button>
  );
};
