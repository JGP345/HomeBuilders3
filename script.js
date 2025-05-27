// Toggle menú
document.getElementById("menuBtn").addEventListener("click", () => {
  const nav = document.getElementById("nav").querySelector("ul");
  nav.classList.toggle("show");
});

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
}, {
  threshold: 0.1,
});

document.querySelectorAll('.scroll').forEach(el => {
  observer.observe(el);
});
