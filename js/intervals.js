let mathCont = document.querySelector(".math-container");
let time = document.querySelector(".time");
let mathbox = document.querySelector(".math-box");
let task = document.querySelector(".task");
let inputAnswer = document.querySelector("input");
let submit = document.querySelector(".sub-btn");
let answerTrue = document.querySelector(".answer-true");
let answerFalse = document.querySelector(".answer-false");
let answerText = document.querySelector(".answer-text");
let taskAnswer;

// --------TASK
let number1 = Math.floor(Math.random() * 10);
let number2 = Math.floor(Math.random() * 10);
let symbol = Math.round(Math.random() * (4 - 1)) + 1;
if (symbol == 1) {
  task.innerHTML = `რას უდრის ${number1} + ${number2}`;
  taskAnswer = number1 + number2;
}
if (symbol == 2) {
  task.innerHTML = `რას უდრის ${number1} - ${number2}`;
  taskAnswer = number1 - number2;
}
if (symbol == 3) {
  task.innerHTML = `რას უდრის ${number1} / ${number2}`;
  taskAnswer = number1 / number2;
}
if (symbol == 4) {
  task.innerHTML = `რას უდრის ${number1} * ${number2}`;
  taskAnswer = number1 * number2;
}
console.log(taskAnswer);

// -------Answer True or False
submit.addEventListener("click", function () {
  if (taskAnswer == inputAnswer.value) {
    // task.style.display = "none"
    // inputAnswer.display = "none"
    console.log("true");
  }
  if (taskAnswer != inputAnswer.value) {
    console.log("false");
  }
});
// ------დარჩენილი დრო
let timeCounter = 10;
setInterval(function () {
  time.innerHTML = `დარჩენილი დრო: ${timeCounter--} წმ`;
  setTimeout(function () {
    if ((timeCounter = 0)) {
      clearInterval();
    }
  }, 10000);
}, 1000);
