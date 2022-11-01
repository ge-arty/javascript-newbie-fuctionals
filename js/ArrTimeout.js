let loaderBox = document.querySelector(".loader-box");
let arrayBox = document.querySelector(".array-box");
let users = [
  { name: "John", email: "john@example.com" },
  { name: "Alex", email: "alex@example.com" },
  { name: "Lily", email: "lily@example.com" },
];
// --------------Creating Divs from Object-------
function addToArr(username, mail) {
  const arrMarkup = `<div class="users">
   <p class="username">Username: ${username}</p>
   <p class="email">Email: ${mail}</p>
   </div>`;
  arrayBox.innerHTML += arrMarkup;
}
function generate(usersinfo) {
  for (let i = 0; i < usersinfo.length; i++) {
    addToArr(usersinfo[i].name, usersinfo[i].email);
  }
}
function init() {
  generate(users);
}
init();
// ------------------Timeout---------------------
setTimeout(function () {
  loaderBox.style.display = "none";
  arrayBox.style.display = "flex";
}, 5000);
