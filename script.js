document.addEventListener("DOMContentLoaded", () => {
  // ----- Splash Screen (index.html) -----
  const introScreen = document.getElementById("introScreen");
  if (introScreen) {
    introScreen.style.transition = "opacity 1s ease-in-out";

    setTimeout(() => {
      introScreen.style.opacity = 0;
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000); // Wait for fade
    }, 3000); // Show splash for 3 seconds
  }

  // ----- Login Screen (login.html) -----
  const loginForm = document.getElementById("loginForm");
  const loginContainer = document.getElementById("loginContainer");

  if (loginForm && loginContainer) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      loginContainer.style.transition = "opacity 0.8s";
      loginContainer.style.opacity = 0;

      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 800);
    });
  }

  // ----- Dashboard (dashboard.html) -----
  const interactiveButtons = document.querySelectorAll(
    ".icon-button, .arrow-button, .treatment-button"
  );

  if (interactiveButtons.length > 0) {
    interactiveButtons.forEach((button) => {
      button.addEventListener("click", () => {
        alert("This button is functional (but not connected yet).");
      });
    });
  }
});
