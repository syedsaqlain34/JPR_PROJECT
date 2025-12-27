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
