let playerOneName = document.querySelector("#player1");
let playerTwoName = document.querySelector("#player2");

let input = document.getElementById("input");
let input2 = document.getElementById("input2");

let button = document.querySelector("#submit-button");
button.addEventListener("click", function (e) {
  const player1 = "Hey  " + input.value + ", you'll be (X) and you go first!";
  const player2 = "Hi " + input2.value + ",  you'll be (O), so who's the best?";

  playerOneName.innerText = player1;
  playerTwoName.innerText = player2;

  let gameState = {
    board: [null, null, null, null, null, null, null, null, null],
    currentPlayer: "X",
  };
  const board = document.querySelector("#board");

  board.addEventListener("click", function (e) {
    const index = +e.target.id;

    renderBoard();

    gameState.board[index] = gameState.currentPlayer;
    console.log(gameState.board);
    function renderBoard() {
      for (let i = 0; i < gameState.board.length; i++) {
        const currDiv = document.getElementById(`${i}`);
        currDiv.innerText = gameState.board[i];
      }
    }
  });
  function switchPlayer() {
    if (gameState.currentPlayer === "X") {
      gameState.currentPlayer = "O";
    } else {
      gameState.currentPlayer = "X";
    }
  }
});

switchPlayer();
