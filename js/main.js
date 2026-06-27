const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("is-visible");

    if (entry.target.classList.contains("gtfo") && !entry.target.dataset.videoStarted) {
      entry.target.dataset.videoStarted = "true";

      const gtfoVideo = entry.target.querySelector(".gtfo-main-video");

      if (gtfoVideo) {
        gtfoVideo.pause();
        gtfoVideo.currentTime = 0;

        setTimeout(() => {
          entry.target.classList.add("video-started");
          gtfoVideo.play().catch(() => {});
        }, 1100);
      }
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
