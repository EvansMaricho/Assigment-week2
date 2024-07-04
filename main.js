const hamburger = document.querySelector(".hamburger");
const containerCenter = document.querySelector(".container-center");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const header = document.querySelector("header");
header.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
