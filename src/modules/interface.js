import { size } from "./gameboard";

function initializeGameBoard(board) {
  const boardContainer = document.querySelector(".gameboards");
  const newBoard = document.createElement("div");

  newBoard.style.display = "grid";
  newBoard.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`;

  board.board.forEach((field) => {
    const drawField = document.createElement("div");
    drawField.classList.add("field");
    if (field.occupied !== null) drawField.style.backgroundColor = "yellow";
    newBoard.appendChild(drawField);
  });

  boardContainer.appendChild(newBoard);
}

export { initializeGameBoard };
