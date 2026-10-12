// Mobil menyu
const btn = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");

function setMenu(open) {
  nav.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", open);
  btn.setAttribute("aria-label", open ? "Menyuni yopish" : "Menyuni ochish");
}
btn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
nav
  .querySelectorAll("a")
  .forEach((a) => a.addEventListener("click", () => setMenu(false)));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setMenu(false);
});

// Joriy bo'limni menyuda belgilash
const links = [...nav.querySelectorAll("a")];
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((a) =>
        a.classList.toggle(
          "active",
          a.getAttribute("href") === "#" + entry.target.id,
        ),
      );
    });
  },
  { rootMargin: "-45% 0px -50% 0px" },
);
document
  .querySelectorAll("main section[id]")
  .forEach((s) => observer.observe(s));

// Yil
document.getElementById("year").textContent = new Date().getFullYear();
