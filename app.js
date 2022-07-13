console.log("app.js is running");
let input = document.getElementById("input");
let input2 = document.getElementById("input2");
let button = document.querySelector("#submit-button");

console.log(button);

button.addEventListener("click", function (e) {
  const player1 = input.value;
  const player2 = input2.value;
  player1.innerText = player1.input;
  player2.innerText = player2.input2;

  // console.log(input.value);
});

let gameState = {
  board,
};
