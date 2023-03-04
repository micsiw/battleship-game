import Player from "./player";
import GameBoard, { size } from "./gameboard";
import { initializeGameBoard } from "./interface";

function randomlyPlaceShips(player, board) {
  const playerShips = player.ships;
  const shipsCount = player.ships.length;

  for (let i = 0; i < shipsCount; i++) {
    const shipName = playerShips.pop();
    const randomCoordinates = Math.floor(Math.random() * size);
    board.placeShip(shipName, randomCoordinates);
  }
}

function initializeGame() {
  const player = Player("Player");
  const opponent = Player("Computer");

  const playerBoard = GameBoard();
  const opponentBoard = GameBoard();

  randomlyPlaceShips(player, playerBoard);
  randomlyPlaceShips(opponent, opponentBoard);

  initializeGameBoard(playerBoard);
  initializeGameBoard(opponentBoard);
}

export { initializeGame };
