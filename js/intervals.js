let mathCont = document.querySelector(".math-container");
let time = document.querySelector(".time");
let mathbox = document.querySelector(".math-box");
let task = document.querySelector(".task");
let inputAnswer = document.querySelector("input");
let submit = document.querySelector(".sub-btn");
let answerTrue = document.querySelector(".answer-true");
let answerFalse = document.querySelector(".answer-false");
let answerText = document.querySelector(".answer-text");
let timeOut = document.querySelector(".out-of-time");
let taskAnswer;

// -------დარჩენილი დრო
let timeCounter = 11;
let myInterval = setInterval(function () {
  timeCounter--;
  time.innerHTML = `დარჩენილი დრო: ${timeCounter} წმ`;
  if (timeCounter == 0) {
    task.style.display = "none";
    inputAnswer.style.display = "none";
    submit.style.display = "none";
    answerText.style.display = "none";
    timeOut.style.display = "block";
    clearInterval(myInterval);
  }
}, 1000);

// --------TASK
let number1 = Math.floor(Math.random() * (10 - 1)) + 1;
let number2 = Math.floor(Math.random() * (10 - 1)) + 1;
let symbol = Math.round(Math.random() * (4 - 1)) + 1;
if (symbol == 1) {
  task.innerHTML = `რას უდრის: ${number1} + ${number2}`;
  taskAnswer = number1 + number2;
}
if (symbol == 2) {
  task.innerHTML = `რას უდრის: ${number1} - ${number2}`;
  taskAnswer = number1 - number2;
}
if (symbol == 3) {
  task.innerHTML = `რას უდრის: ${number1} / ${number2}`;
  taskAnswer = number1 / number2;
}
if (symbol == 4) {
  task.innerHTML = `რას უდრის: ${number1} * ${number2}`;
  taskAnswer = number1 * number2;
}
console.log(taskAnswer);

// -------Answer True or False
submit.addEventListener("click", function () {
  if (taskAnswer == inputAnswer.value) {
    task.style.display = "none";
    inputAnswer.style.display = "none";
    submit.style.display = "none";
    answerText.style.display = "none";
    answerTrue.style.display = "block";
    clearInterval(myInterval);
    console.log("true");
  }
  if (taskAnswer != inputAnswer.value) {
    task.style.display = "none";
    inputAnswer.style.display = "none";
    submit.style.display = "none";
    answerText.style.display = "none";
    answerFalse.style.display = "block";
    clearInterval(myInterval);
    console.log("true");
    console.log("false");
  }
});
