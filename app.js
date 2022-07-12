console.log("app.js is running");
let input = document.getElementById("input");
let button = document.querySelector("#submit-button");
let grid = document.querySelector("#grid");

console.dir(grid);
console.log(button);

button.addEventListener("click", function (e) {
  console.log(input.value);
});
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

grid.addEventListener("click", function (event) {
  console.log(event.target.id);
});
// let gameState = {
//   board: [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ],
// };

// let player1 = "X";

// let inputP1Name = document.querySelector("#player1");
// let inputP2Name = document.querySelector("#player2");
// let button = document.querySelector(".button1");
// let player1 = document.querySelector("#player1");
// let player2 = document.querySelector("#player2");

// button.addEventListener("click", function (_e) {
//   const player1 = inputP1Name.value;
//   const player2 = inputP2Name.value;
//   player1.innerText = player1;
//   player2.innerText = player2;
// })
