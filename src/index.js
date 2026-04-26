import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import "./sass/custom.scss";
import '@fortawesome/fontawesome-free/js/all.min.js'


document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".main-navbar");
  const slider = document.querySelector(".hero-carousel");

  window.addEventListener("scroll", function () {
    if (window.scrollY > slider.offsetHeight) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();