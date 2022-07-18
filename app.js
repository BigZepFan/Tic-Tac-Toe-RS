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
const reloadtButton = document.querySelector("#reload");
function reload() {
  reload = location.reload();
}
// PLEASE DON'T Break ↑↓ ▲ ▼  ! "" ☻ ♥ ♦ ♣ ♠ • ◘ ○ ◙ ♂ ♀ ♪ ♫ ☼ ► ◄ ♪♫ ♥♫♪

let gameState = {
  board: [null, null, null, null, null, null, null, null, null],
  currentPlayer: "X",
};

// Make a reference to our board
const board = document.querySelector("#board");

// Add an event listener to the board
board.addEventListener("click", function (e) {
  //console.log(e.target.id);
  const index = +e.target.id;
  // console.log(typeof index);
  gameState.board[index] = gameState.currentPlayer;
  // console.log(gameState.board);
  renderBoard();
  switchPlayer();
});

function switchPlayer() {
  if (gameState.currentPlayer === "X") {
    gameState.currentPlayer = "O";
  } else {
    gameState.currentPlayer = "X";
  }
}

function renderBoard() {
  for (let i = 0; i < gameState.board.length; i++) {
    const currDiv = document.getElementById(`${i}`);
    currDiv.innerText = gameState.board[i];
  }
}
