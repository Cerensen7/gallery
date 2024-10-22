
window.addEventListener("scroll", function () {
  var header = document.getElementById("main-header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.style.backgroundColor = "rgba(31, 29, 31, 0.8)"; 
  } else {
    header.style.backgroundColor = "rgba(31, 29, 31, 1)"; 
  }
});




const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});
