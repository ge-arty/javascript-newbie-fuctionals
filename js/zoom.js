let picture = document.querySelectorAll(".picture");
console.log(picture);

picture.forEach((el, i) =>
  el.addEventListener("click", function () {
    picture[i].style.width = "100%";
    for (let x = 0; x < picture.length; x++) {
      if (x != i) {
        picture[x].style.width = "15%";
      }
    }
  })
);
