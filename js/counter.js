let counterValue = document.querySelector(".counter-value")

let decrease = document.querySelector(".decrease")
decrease.style.backgroundColor.active = "red"
let increase = document.querySelector(".increase")
let reset = document.querySelector(".reset")
decrease.addEventListener("click", function() {
   counterValue.innerText--;
   if (counterValue.innerText < 0) counterValue.style.color = "red";
   if (counterValue.innerText == 0) counterValue.style.color = "white";
 });
 increase.addEventListener("click", function() {
   counterValue.innerText++;
   if (counterValue.innerText > 0) counterValue.style.color = "green";
   if (counterValue.innerText == 0) counterValue.style.color = "white";
 });
 reset.addEventListener("click", function() {
   counterValue.innerText=0;
   if (counterValue.innerText == 0) counterValue.style.color = "white";
});
   