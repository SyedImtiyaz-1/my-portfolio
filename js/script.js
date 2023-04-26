const heroSection = document.getElementById("hero");
const skillSection = document.getElementById("techStack");
const projectSection = document.getElementById("project");

document.querySelector(".home-l").addEventListener("click", () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".skills-l").addEventListener("click", () => {
  skillSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".project-l").addEventListener("click", () => {
  projectSection.scrollIntoView({ behavior: "smooth" });
});
