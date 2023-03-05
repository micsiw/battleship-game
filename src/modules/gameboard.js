import types from "./shipTypes";

const size = 100;

function getRandomBoolean() {
  return Math.random() < 0.5;
}

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
    const isHorizontal = getRandomBoolean();

    function checkIfCoordinatesValid() {
      const horizontalBorder = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
      const verticalBorder = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109];
      if (isHorizontal === true) {
        for (let i = 1; i < shipSize; i++) {
          if (horizontalBorder.includes(coordinates + i)) return false;
        }
      } else {
        let verticalFields = 10;
        for (let i = 1; i < shipSize; i++) {
          if (verticalBorder.includes(coordinates + verticalFields))
            return false;
          verticalFields += 10;
        }
      }
      return true;
    }

    if (isHorizontal === true && checkIfCoordinatesValid() === true) {
      for (let i = 0; i < shipSize; i++) {
        board[coordinates + i].occupied = ship;
      }
      return true;
    }
    if (isHorizontal === false && checkIfCoordinatesValid() === true) {
      let verticalFields = 0;
      for (let i = 0; i < shipSize; i++) {
        board[coordinates + verticalFields].occupied = ship;
        verticalFields += 10;
      }
      return true;
    }
    return false;
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
