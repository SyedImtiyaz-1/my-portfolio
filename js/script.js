const heroSection = document.getElementById("hero");
const skillSection = document.getElementById("techStack");
const projectSection = document.getElementById("project");
const c_btns = document.getElementById("certi-id");
const light_mode = document.getElementById("light-mode");
const open_dark = document.getElementById('nav-collapse')
const open_nav = document.getElementById("nav-line");
const side_nav = document.querySelector('.mySide');
const close_nav = document.querySelector('#x');
const hero_exit_nav = document.querySelector('#hero');

document.querySelector(".home-l").addEventListener("click", () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".skills-l").addEventListener("click", () => {
  skillSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".project-l").addEventListener("click", () => {
  projectSection.scrollIntoView({ behavior: "smooth" });
});

function certi_1() {
  window.open(
    "https://www.coursera.org/account/accomplishments/verify/9DKH8M8JSC9K"
  );
}
function certi_2() {
  window.open(
    "https://www.coursera.org/account/accomplishments/verify/GUL48F4REY55"
  );
}
function certi_3() {
  window.open("https://www.hackerrank.com/certificates/4187d9f01a74");
}
function certi_4() {
  window.open("https://www.hackerrank.com/certificates/f9103af05008");
}
function certi_5() {
  window.open("https://www.hackerrank.com/certificates/79cdbeb817f2");
}
function certi_6() {
  window.open("https://www.hackerrank.com/certificates/bcce29463561");
}

// Dark Mode - Light Mode
light_mode.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});

open_dark.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");
});

open_nav.addEventListener("click", function(){
  side_nav.style.width="220px";
});

close_nav.addEventListener("click", function(){
  side_nav.style.width="0px";
});

hero_exit_nav.addEventListener("click", function(){
  mobile_nav.style.width="0px";
})