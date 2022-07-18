console.log("app.js running");

let input = document.getElementById("input");
let button = document.querySelector("#submit-button");
let grid = document.querySelector("#grid");

console.dir(grid);
// console.log(button);

button.addEventListener("click", function (e) {
  console.log(input.value);
});

// Create an element
// let cell = document.createElement("div");
// cell.classList.add("cell");
// cell.id = `1`;
// grid.appendChild(cell);

const gridSize = 3;

function makeGrid() {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
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
