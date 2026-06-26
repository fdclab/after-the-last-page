const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
}, {
  threshold: 0.15
});

document.querySelectorAll(".story-hero").forEach((section) => {
  observer.observe(section);
});

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});
