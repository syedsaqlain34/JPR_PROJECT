/* ===============================
   SAFE ABOUT TEXT (NO ERROR)
================================ */
const about = document.getElementById("about");
if (about) {
  about.textContent = "Job Processing Resource about page";
  console.log(about);
}

/* ===============================
   PAGE LOAD ANIMATION
================================ */
window.addEventListener("load", () => {
  const card = document.querySelector(".card");
  if (card) card.classList.add("show");
});

/* ===============================
   INPUT FOCUS EFFECT
================================ */
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("focus", () => {
    input.style.transform = "scale(1.02)";
  });

  input.addEventListener("blur", () => {
    input.style.transform = "scale(1)";
  });
});

/* ===============================
   BUTTON CLICK EFFECT
================================ */
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.add("clicked");
    setTimeout(() => button.classList.remove("clicked"), 300);
  });
});

/* ===============================
   PASSWORD SHOW / HIDE (ICON)
================================ */
function togglePassword(inputId, icon) {
  const input = document.getElementById(inputId);
  if (!input) return;

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

/* ===============================
   SIGNUP FORM SUBMIT (NO RELOAD)
================================ */
const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // stop reload

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, confirmPassword })
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
      } else {
        alert("Signup successful!");
        window.location.href = "signin.html";
      }

    } catch (err) {
      alert("Server error");
      console.error(err);
    }
  });
}
