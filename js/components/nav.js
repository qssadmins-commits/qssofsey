function initNav() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  const navEl = document.querySelector("nav");

  if (!toggle || !links || !navEl) return;
  toggle.type = "button";

  function openNav() {
    links.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    document.body.style.overflow = "hidden";
  }

  function closeNav() {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    document.body.style.overflow = "";
  }

  toggle.addEventListener("click", () => {
    links.classList.contains("open") ? closeNav() : openNav();
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("click", (event) => {
    if (!navEl.contains(event.target) && links.classList.contains("open")) {
      closeNav();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && links.classList.contains("open")) closeNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && links.classList.contains("open")) {
      closeNav();
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initNav);
} else {
  initNav();
}
