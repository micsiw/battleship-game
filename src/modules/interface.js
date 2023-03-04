import { size } from "./gameboard";

function initializeGameBoard() {
  const playerBoard = document.querySelector(".player-gameboard");
  const enemyBoard = document.querySelector(".opponent-gameboard");

  playerBoard.style.display = "grid";
  playerBoard.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`;

  enemyBoard.style.display = "grid";
  enemyBoard.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`;

  for (let i = 0; i < size; i++) {
    const field = document.createElement("div");
    field.classList.add("field");
    playerBoard.appendChild(field);
  }

  for (let i = 0; i < size; i++) {
    const field = document.createElement("div");
    field.classList.add("field");
    enemyBoard.appendChild(field);
  }
}

export { initializeGameBoard };
