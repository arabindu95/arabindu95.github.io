// Button click alert
document.getElementById("hireBtn").addEventListener("click", () => {
  alert("Thanks for showing interest! You can contact me via the form below.");
});

// Contact form submit
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your message has been sent successfully!");
  e.target.reset();
});
