/**
 * QSS Theme Manager
 * Runs before paint to prevent flash.
 * Default: dark mode (unless user has explicitly chosen light).
 */
(function () {
  const stored = localStorage.getItem("qss-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  // Default to dark unless user explicitly stored "light"
  const theme = stored ? stored : (prefersDark ? "dark" : "dark");
  document.documentElement.setAttribute("data-theme", theme);
})();

function initThemeToggle() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  function getTheme() {
    return document.documentElement.getAttribute("data-theme") || "dark";
  }

  function setTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    localStorage.setItem("qss-theme", t);
    btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
    btn.title = t === "dark" ? "Switch to light mode" : "Switch to dark mode";
    btn.textContent = t === "dark" ? "☀️" : "🌙";
  }

  setTheme(getTheme());

  btn.addEventListener("click", () => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (!localStorage.getItem("qss-theme")) {
      setTheme(e.matches ? "dark" : "light");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
  initThemeToggle();
}
