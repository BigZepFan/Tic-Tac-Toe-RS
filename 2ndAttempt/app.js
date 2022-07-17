let playerOneName = document.getElementById("player1");
let playerTwoName = document.getElementById("player2");

let input = document.getElementById("input");
let input2 = document.getElementById("input2");

let button = document.getElementById("submit-button");
button.addEventListener("click", function (theplayers) {
  const player1 =
    "Hi there " + input.value + "! You'll be (X) and you go first!";
  const player2 =
    "Hello " + input2.value + "! You'll be (O), so who's the best?";

  playerOneName.innerText = player1;
  playerTwoName.innerText = player2;
});

//****************** ↓ FAIL GAME ***************** */

let gameState = {
  currentPlayer: "X",
  board: [null, null, null, null, null, null, null, null, null],

  player1: "",
  player2: "",
  gameState: "playing",
};

const board = document.querySelector("#board");

board.addEventListener("click", function (e) {
  const index = +e.target.id;
  gameState.board[index] = gameState.currentPlayer;
  renderBoard();
});
function renderBoard() {
  for (let i = 0; i < gameState.board.length; i++) {
    const currDiv = document.getElementById(`#${i}`);
    currDiv.innerText = gameState.board[i];
  }
}
function switchPlayers() {
  if (gameState.currentPlayer === "X") {
    gameState.currentPlayer = "O";
  } else {
    gameState.currentPlayer = "X";
  }
}
//********************************** ↑ FAIL ***************
