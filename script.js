document.addEventListener("DOMContentLoaded", () => {
  // Tema-toggle
  const btn = document.getElementById("theme-toggle");
  if (!btn) {
    console.error("Knappen med id 'theme-toggle' findes ikke!");
    return;
  }

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
  };

  const savedTheme = localStorage.getItem("theme") || "light";
  setTheme(savedTheme);

  btn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });

  // Burger-menu toggle
  const burger = document.getElementById("burger");
  const navList = document.getElementById("navList");
  if (burger && navList) {
    burger.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  } else {
    console.warn("Burger-knap eller nav-list findes ikke i DOM");
  }
});