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
  // function renderPlayers (){
  //   const currDiv = document.querySelector (.gamers)

  // console.log(input.value);
});
let gameState = {
  board: [null, null, null, null, null, null, null, null, null],
  currentPlayer: "X",
};
const board = document.querySelector("#board");

board.addEventListener("click", function (e) {
  const index = +e.target.id;

  gameState.board[index] = gameState.currentPlayer;
  console.log(gameState.board);
  function renderBoard() {
    for (let i = 0; i < gameState.board.length; i) {
      const currDiv = document.getElementById(`${i++}`);
      currDiv.innerText = gameState.board[i];
    }
  }
  renderBoard();
});
// function switchPlayer() {
//   if (gameState.currentPlayer === "X") {
//     gameState.currentPlayer = "O";
//   } else {
//     gameState.currentPlayer = "X";
//   }
// }
//switchPlayer();
