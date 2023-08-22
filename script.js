const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  header.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((navLink) =>
  navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");
  })
);
