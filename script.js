var menuToggle = document.querySelector(".menu-toggle");
var nav = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
