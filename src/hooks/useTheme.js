import { useEffect, useState } from "react";

/**
 * Keep the selected color theme in sync with the document and local storage.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("nexora-theme");
    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("nexora-theme", theme);
  }, [theme]);

  // Toggle between the two supported color themes.
  const toggleTheme = () => setTheme((current) => current === "dark" ? "light" : "dark");

  return [theme, toggleTheme];
}
