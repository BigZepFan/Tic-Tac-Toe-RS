let gameState = {
  player1: null,
  player2: null,
};
let inputP1Name = document.getElementById("player1");
let inputP2Name = document.getElementById("player2");
let button = document.getElementById("button1");
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
// ++++++++++++++  ↓ NEW TRY ↓ ++++++++++++++
// Maybe a current Player?
// A game status?? 'isPlaying' or 'over'
// Any other data your game logic depends on?

//   let Current_player = 0;
//   let player0 = "";
//   let player1 = "";

// const participants = () => {
//   document.getElementById("p1Name").innerHTML = "Hello: " + player0;
//   document.getElementById("p2Name").innerHTML = "Hi there: " + player1;
//   document.getElementById("restart").innerHTML =
//     "<button onclick = 'Newgame.clear()'> Restart </button>";

//   render_table();
// };

// ++++++++++++++++ ↑ NEW TRY ↑ +++++++++++++++

//board.addEventListener("click", function (event) {
// Figure out how to get the coordinates off event object (e.target.value)
// Use those coordinates to reference indexes in our gameState.board
// Set the position in our board to the current player
//});
//function renderGame() {
// Call this function after you've changed your state values
// Make references to DOM elements, and set the innerText,
// or innerHTML to reflect our gameState.board
//}
//function switchPlayer() {
// ???
//}

//function checkWin() {
// Maybe this calls other helper functions?
// checkRow()
// checkColumn()
// checkDiagonals()
//}
// This takes a row index
//function logARow(rowIdx) {
//for (let i = 0; i < grid.length; i++) {
//console.log(grid[rowIdx][i]);
//}
//}

//logARow(2);

// this takes a column index
//function logAColumn(colIdx) {
// for (let i = 0; i < grid.length; i++) {
//  console.log(grid[i][colIdx]);
//  }
// }

// logAColumn(0);

// function logDiagDown() {
//   for (let i = 0; i < grid.length; i++) {
//     console.log(grid[i][i]);
//   }
// }

// logDiagDown();

// function logDiagUp() {
//   for (let i = grid.length - 1; i >= 0; i--) {
//     console.log(grid[i][i]);
//   }
// }

// logDiagUp();
let grid = document.querySelector("#grid");
function makeGrid() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = `${i},${j}`;
      grid.appendChild(cell);
    }
  }
}

makeGrid();
