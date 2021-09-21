console.log("hello");

document.addEventListener("DOMContentLoaded", () => {
  const mobileOverlay = document.querySelector(".mobile-nav__overlay");
  const mobileMenu = document.querySelector(".mobile-menu");

  const hamburger = document.querySelector(".mobile-hamburger");

  mobileOverlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    mobileOverlay.classList.remove("active");
  });

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    mobileOverlay.classList.toggle("active");
  });
});
