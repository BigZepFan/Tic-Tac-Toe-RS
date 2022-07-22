console.log("app.js running");

let input = document.getElementById("input");
let button = document.querySelector("#submit-button");
const board = document.querySelector("#board");

console.dir(board);
// console.log(button);

button.addEventListener("click", function (e) {
  console.log(input.value);
});

// Create an element
// let cell = document.createElement("div");
// cell.classList.add("cell");
// cell.id = `1`;
// board.appendChild(cell);

const boardSize = 3;

function makeBoard() {
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `${i},${j}`;
      board.appendChild(cell);
    }
  }
}

makeBoard();

board.addEventListener("click", function (event) {
  console.log(event.target.id);
});

const reloadButton = document.querySelector("#reload");
function reload() {
  reload = location.reload();
}
// PLEASE DON'T Break *******************//

let gameState = {
  board: [null, null, null, null, null, null, null, null, null],
  currentPlayer: "X",
};

//const board = document.querySelector("#board");

board.addEventListener("click", function (e) {
  const index = +e.target.id;

  gameState.board[index] = gameState.currentPlayer;

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
