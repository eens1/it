// theme-switcher.js
document.addEventListener("DOMContentLoaded", () => {
  const themeIcon = document.getElementById("theme-icon");
  const currentTheme = localStorage.getItem("theme") || detectSystemTheme();

  applyTheme(currentTheme);

  // Toggle Theme on Click
  themeIcon.addEventListener("click", () => {
    const newTheme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  function detectSystemTheme() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }
});
