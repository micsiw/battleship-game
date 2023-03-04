import types from "./shipTypes";

const size = 100;

const GameBoard = () => {
  const board = [];

  function initialize(boardSize) {
    for (let i = 0; i < boardSize; i++) {
      const field = {
        occupied: null,
        visited: false,
      };
      board.push(field);
    }
  }

  initialize(size);

  const placeShip = (type, coordinates) => {
    const ship = types[type];
    const shipSize = ship.getSize();

    for (let i = 0; i < shipSize; i++) {
      board[coordinates + i].occupied = ship;
    }
  };

  const receiveAttack = (coordinates) => {
    if (board[coordinates].visited === true) {
      console.log("Field was already used");
    }
    if (board[coordinates].occupied !== null) {
      console.log("Ship was striked");
      board[coordinates].occupied.hit();
    }
    board[coordinates].visited = true;
  };

  const areAllSunk = () => {
    let areSunk = true;
    board.forEach((field) => {
      if (field.occupied !== null && field.occupied.isSunk() === false) {
        areSunk = false;
      }
    });
    return areSunk;
  };

  return { board, placeShip, receiveAttack, areAllSunk };
};

export default GameBoard;
export { size };
