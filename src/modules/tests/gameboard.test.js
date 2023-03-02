import Gameboard from "../gameboard";

const randomGameboard = Gameboard();

test("Check if ship was properly added on gameboard", () => {
  randomGameboard.placeShip("Destroyer", 60);
  //   console.log(randomGameboard.board);
  expect(randomGameboard.board[59].occupied).toBe(null);
  expect(randomGameboard.board[60].occupied).not.toBe(null);
  expect(randomGameboard.board[61].occupied).not.toBe(null);
  expect(randomGameboard.board[62].occupied).toBe(null);
});
