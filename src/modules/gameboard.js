import types from "./shipTypes.js";

const size = 100;

const Gameboard = () => {
  let board = [];

  function initialize(size) {
    for (let i = 0; i < size; i++) {
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

  return { board, placeShip };
};

export default Gameboard;
