let a1 = document.getElementById("about");
a1.textContent= "Job Processing Resource about page";
console.log(a1);

// signup interactivity
// Fade-in animation on page load
window.addEventListener("load", () => {
  document.querySelector(".card").classList.add("show");
});

// Input focus animation
document.querySelectorAll("input").forEach(input => {
  input.addEventListener("focus", () => {
    input.style.transform = "scale(1.02)";
  });

  input.addEventListener("blur", () => {
    input.style.transform = "scale(1)";
  });
});

// Button click ripple effect
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", e => {
    button.classList.add("clicked");
    setTimeout(() => button.classList.remove("clicked"), 300);
  });
});


// backend code

document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, confirmPassword })
    });

    const data = await response.json();
    alert(data.message);

    if (response.ok) {
        // Optional: redirect to signin page
        window.location.href = "signin.html";
    }
});
