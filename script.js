
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector(".menu-button");
  const nav = document.querySelector(".nav");
  if (button && nav) {
    button.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }
});
