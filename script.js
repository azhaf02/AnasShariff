const reveals = document.querySelectorAll(".section, .service-card, .project-card");
const magneticButtons = document.querySelectorAll("[data-magnetic]");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((element) => {
  element.classList.add("reveal");
  observer.observe(element);
});

magneticButtons.forEach((button) => {
  button.addEventListener("mousemove", (event) => {
    const rect = button.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${offsetX * 0.08}px, ${offsetY * 0.08}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0, 0)";
  });
});
