// ---------------------Main
let palette = document.querySelector(".palette-btn")
let body = document.querySelector("body")
palette.addEventListener("click",function(){
   let randomColor = Math.floor(Math.random()*16777215).toString(16);
   console.log(randomColor)
   body.style.backgroundColor = "#" + randomColor
})




