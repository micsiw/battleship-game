import { size } from "./gameboard";

function initializeGameBoard(board) {
  const boardContainer = document.querySelector(".gameboards");
  const newBoard = document.createElement("div");

  newBoard.style.display = "grid";
  newBoard.style.gridTemplateColumns = `repeat(${Math.sqrt(size)}, 1fr)`;

  board.board.forEach((field, index) => {
    const drawField = document.createElement("div");
    drawField.classList.add("field");
    drawField.dataset.field = index;
    if (field.occupied !== null && field.occupied !== "blocked")
      drawField.style.backgroundColor = "yellow";
    if (field.occupied === "blocked") drawField.style.backgroundColor = "pink";
    newBoard.appendChild(drawField);
  });

  boardContainer.appendChild(newBoard);
}

export { initializeGameBoard };
