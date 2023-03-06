import GameBoard from "../gameboard";

const randomGameBoard = GameBoard();

test("Check if ship was properly added on game board", () => {
  randomGameBoard.placeShip("Destroyer", 60, true);
  expect(randomGameBoard.board[59].occupied).toBe("blocked");
  expect(randomGameBoard.board[60].occupied).not.toBe(null);
  expect(randomGameBoard.board[61].occupied).not.toBe(null);
  expect(randomGameBoard.board[62].occupied).toBe("blocked");
});

test("Check if ship has properly added buffer on fields around him", () => {
  randomGameBoard.placeShip("Destroyer", 2, true);
  expect(randomGameBoard.board[1].occupied).toBe("blocked");
  expect(randomGameBoard.board[2].occupied).not.toBe(null);
  expect(randomGameBoard.board[3].occupied).not.toBe(null);
  expect(randomGameBoard.board[4].occupied).toBe("blocked");
  expect(randomGameBoard.board[11].occupied).toBe("blocked");
  expect(randomGameBoard.board[12].occupied).toBe("blocked");
  expect(randomGameBoard.board[13].occupied).toBe("blocked");
  expect(randomGameBoard.board[14].occupied).toBe("blocked");
});

test("Check if ship was properly hit after receiving attack, and miss was noticed", () => {
  randomGameBoard.placeShip("Carrier", 43, true);
  expect(randomGameBoard.board[43].occupied).not.toBe(null);
  expect(randomGameBoard.board[47].occupied).not.toBe(null);
  expect(randomGameBoard.board[43].occupied.getHealth()).toBe(5);
  expect(randomGameBoard.board[47].occupied.getHealth()).toBe(5);
  randomGameBoard.receiveAttack(44);
  expect(randomGameBoard.board[43].occupied.getHealth()).toBe(4);
  expect(randomGameBoard.board[47].occupied.getHealth()).toBe(4);
  randomGameBoard.receiveAttack(30);
  expect(randomGameBoard.board[43].occupied.getHealth()).toBe(4);
  expect(randomGameBoard.board[47].occupied.getHealth()).toBe(4);
  expect(randomGameBoard.board[30].visited).toBe(true);
});

const newGameBoard = GameBoard();

test("Check if board properly report all ships destroyed", () => {
  expect(newGameBoard.areAllSunk()).toBe(true);
  newGameBoard.placeShip("Destroyer", 22, true);
  expect(newGameBoard.areAllSunk()).toBe(false);
  newGameBoard.receiveAttack(22);
  newGameBoard.receiveAttack(23);
  expect(newGameBoard.areAllSunk()).toBe(true);
});
