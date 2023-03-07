import Player from "./player";
import GameBoard, { size } from "./gameboard";

const player = Player("Player");
const opponent = Player("Computer");
const playerBoard = GameBoard();
const opponentBoard = GameBoard();

const boardContainer = document.querySelector(".gameboards");

function randomlyPlaceShips(player, board) {
  const playerShips = player.ships;
  const shipsCount = player.ships.length;

  for (let i = 0; i < shipsCount; i++) {
    const shipName = playerShips.pop();
    const randomCoordinates = Math.floor(Math.random() * size);
    const placeShip = board.placeShip(shipName, randomCoordinates);
    if (placeShip === false) {
      playerShips.push(shipName);
      i -= 1;
    }
  }
}

function addControls() {
  const opponentBoardDOM = document.querySelector("[data-player='Computer'");

  opponentBoardDOM.childNodes.forEach((field) => {
    field.addEventListener("click", () => {
      makeTurn(field.dataset.field);
      console.log(field.dataset.field);
    });
  });
}

function updateBoards() {
  showGameBoard(playerBoard, player);
  showGameBoard(opponentBoard, opponent);
  addControls();
}

function initializeGame() {
  randomlyPlaceShips(player, playerBoard);
  randomlyPlaceShips(opponent, opponentBoard);
}

function makeTurn(coordinates) {
  opponentBoard.receiveAttack(coordinates);
  clearBoards();
  updateBoards();
}
// *
function clearBoards() {
  boardContainer.innerHTML = "";
}

function showGameBoard(board, player) {
  const newBoard = document.createElement("div");

  newBoard.style.display = "grid";
  newBoard.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`;
  newBoard.dataset.player = player.name;

  board.board.forEach((field, index) => {
    const drawField = document.createElement("div");
    drawField.classList.add("field");
    drawField.dataset.field = index;
    if (
      (field.occupied === null && field.visited === true) ||
      (field.occupied === "blocked" && field.visited === true)
    ) {
      drawField.style.backgroundColor = "lightgray";
    } else if (
      (field.occupied !== null && field.visited === true) ||
      (field.occupied !== "blocked" && field.visited === true)
    ) {
      drawField.style.backgroundColor = "red";
    } else if (field.occupied !== null && field.occupied !== "blocked") {
      drawField.style.backgroundColor = "yellow";
    }

    newBoard.appendChild(drawField);
  });

  boardContainer.appendChild(newBoard);
}

export { showGameBoard, clearBoards, initializeGame, updateBoards };
