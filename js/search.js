let searchBtn = document.querySelector(".search-icon");
let input = document.querySelector("input");
input.style.width = "0px";
searchBtn.addEventListener("click", function () {
  input.classList.toggle("width");
  input.style.transition = "width 2s";
});
