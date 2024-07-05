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

function darkmode() {
  var SetTheme = document.body;

  SetTheme.classList.toggle("dark-mode");

  if (SetTheme.classList.contains("dark-mode")) {
    console.log("Dark mode");
    theme = "DARK";
  } else {
    console.log("Light mode");
    theme = "LIGHT";
  }

  localStorage.setItem("PageTheme", JSON.stringify(theme));
}

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if (GetTheme === "DARK") {
  document.body.classList = "dark-mode";
}
