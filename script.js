// Logika Tema Gelap / Terang
function toggleTheme() {
  const body = document.body;
  const themeBtn = document.getElementById("theme-toggle-btn");

  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");

  if (isDark) {
    if (themeBtn) themeBtn.innerText = "☀️ Tema Terang";
    localStorage.setItem("theme", "dark");
  } else {
    if (themeBtn) themeBtn.innerText = "🌙 Tema Gelap";
    localStorage.setItem("theme", "light");
  }
}

// Muat pilihan tema yang tersimpan saat halaman dibuka
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const themeBtn = document.getElementById("theme-toggle-btn");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (themeBtn) themeBtn.innerText = "☀️ Tema Terang";
  }
});