import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/style.css";
import "./sass/custom.scss";
import '@fortawesome/fontawesome-free/js/all.min.js';

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".main-navbar");
  const slider = document.querySelector(".hero-carousel");
  const year = document.getElementById("year");

  if (navbar) {
    window.addEventListener("scroll", function () {
      const scrollPoint = slider ? slider.offsetHeight : 80;

      if (window.scrollY > scrollPoint) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".main-navbar");
  const slider = document.querySelector(".hero-carousel");
  const year = document.getElementById("year");

  if (navbar) {
    window.addEventListener("scroll", function () {
      const scrollPoint = slider ? slider.offsetHeight : 80;

      if (window.scrollY > scrollPoint) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // تسجيل حساب جديد
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nameInput = document.getElementById("registerName");
      const birthInput = document.getElementById("registerBirth");
      const emailInput = document.getElementById("registerEmail");
      const passwordInput = document.getElementById("registerPassword");
      const confirmInput = document.getElementById("confirmPassword");
      const message = document.getElementById("registerMessage");

      if (!nameInput || !birthInput || !emailInput || !passwordInput || !confirmInput || !message) {
        return;
      }

      if (passwordInput.value !== confirmInput.value) {
        message.textContent = "كلمة المرور غير متطابقة";
        message.className = "auth-message error";
        return;
      }

      const user = {
        name: nameInput.value,
        birth: birthInput.value,
        email: emailInput.value,
        password: passwordInput.value
      };

      localStorage.setItem("talemnyUser", JSON.stringify(user));

      message.textContent = "تم إنشاء الحساب بنجاح";
      message.className = "auth-message success";

      registerForm.reset();
    });
  }

  // تسجيل الدخول
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const emailInput = document.getElementById("loginEmail");
      const passwordInput = document.getElementById("loginPassword");
      const message = document.getElementById("loginMessage");

      if (!emailInput || !passwordInput || !message) {
        return;
      }

      const savedUser = JSON.parse(localStorage.getItem("talemnyUser"));

      if (!savedUser) {
        message.textContent = "لا يوجد حساب مسجل، أنشئ حساب أولًا";
        message.className = "auth-message error";
        return;
      }

      if (emailInput.value === savedUser.email && passwordInput.value === savedUser.password) {
        message.textContent = `مرحبًا ${savedUser.name}، تم تسجيل الدخول بنجاح`;
        message.className = "auth-message success";
        loginForm.reset();
      } else {
        message.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة";
        message.className = "auth-message error";
      }
    });
  }
});