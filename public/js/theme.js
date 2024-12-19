document.addEventListener("DOMContentLoaded", () => {
  const themeIcon = document.getElementById("theme-icon");

  // Retrieve saved theme or default to dark if localStorage is unavailable or empty
  const savedTheme = getSavedTheme();
  const currentTheme = savedTheme || "dark";

  applyTheme(currentTheme);

  // Toggle Theme on Click
  themeIcon.addEventListener("click", () => {
    const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    saveTheme(newTheme);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }

  function getSavedTheme() {
    try {
      return localStorage.getItem("theme");
    } catch {
      return null; // If localStorage is not accessible, fall back to null
    }
  }

  function saveTheme(theme) {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Handle cases where localStorage is unavailable (e.g., private browsing)
    }
  }
});
