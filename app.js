let gameState = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};
let inputP1Name = document.getElementById("player1");
let inputP2Name = document.getElementById("player2");
let button = document.getElementsByClassName("button1");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");

button.addEventListener("click", function (e) {
  const player1 = inputP1Name.value;
  const player2 = inputP2Name.value;
  player1.innerText = player1;
  player2.innerText = player2;
});

"#playerInput".submit(function (e) {
  e.preventDefault();
});
