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

  const placeShip = (type, coordinates, horizontal = getRandomBoolean()) => {
    const ship = types[type];
    const shipSize = ship.getSize();
    const isHorizontal = horizontal;

    const horizontalBorder = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    const verticalBorder = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109];

    function checkIfCoordinatesValid() {
      if (isHorizontal === true) {
        for (let i = 1; i < shipSize; i++) {
          if (horizontalBorder.includes(coordinates + i)) return false;
        }
        for (let i = 0; i < shipSize; i++) {
          if (coordinates + i >= 0 && coordinates + i < size)
            if (board[coordinates + i].occupied !== null) return false;
        }
      } else if (isHorizontal === false) {
        let verticalFields = 0;
        for (let i = 0; i < shipSize; i++) {
          if (verticalBorder.includes(coordinates + verticalFields))
            return false;
          verticalFields += 10;
        }
        verticalFields = 0;
        for (let i = 0; i < shipSize; i++) {
          if (
            coordinates + verticalFields >= 0 &&
            coordinates + verticalFields < size
          ) {
            if (board[coordinates + verticalFields].occupied !== null)
              return false;
            verticalFields += 10;
          }
        }
      }
      return true;
    }

    if (isHorizontal === true && checkIfCoordinatesValid() === true) {
      const buffer = [
        // right side
        coordinates + shipSize - 10,
        coordinates + shipSize + 10,
        coordinates + shipSize,
        // left side
        coordinates - 11,
        coordinates - 1,
        coordinates + 9,
      ];
      buffer.forEach((field, index) => {
        if (field >= 0 && field < 100) {
          if (index < 3 && !horizontalBorder.includes(field))
            board[field].occupied = "blocked";
          if (index > 2 && !horizontalBorder.map((x) => x - 1).includes(field))
            board[field].occupied = "blocked";
        }
      });
      for (let i = 0; i < shipSize; i++) {
        const bufferFields = [coordinates + i + 10, coordinates + i - 10];
        board[coordinates + i].occupied = ship;
        bufferFields.forEach((field) => {
          if (field >= 0 && field < 100) board[field].occupied = "blocked";
        });
      }
      return true;
    }
    if (isHorizontal === false && checkIfCoordinatesValid() === true) {
      const buffer = [
        // right side
        coordinates - 9,
        coordinates + shipSize * 10 + 1,
        // left side
        coordinates - 11,
        coordinates + shipSize * 10 - 1,
        // up and down
        coordinates - 10,
        coordinates + shipSize * 10,
      ];
      buffer.forEach((field, index) => {
        if (field >= 0 && field < 100) {
          if (index < 2 && !horizontalBorder.includes(field))
            board[field].occupied = "blocked";
          if (
            index > 1 &&
            index < 4 &&
            !horizontalBorder.map((x) => x - 1).includes(field)
          ) {
            board[field].occupied = "blocked";
          }
          if (index > 3) {
            board[field].occupied = "blocked";
          }
        }
      });
      let verticalFields = 0;
      for (let i = 0; i < shipSize; i++) {
        const bufferFields = [
          coordinates + verticalFields + 1,
          coordinates + verticalFields - 1,
        ];
        board[coordinates + verticalFields].occupied = ship;
        bufferFields.forEach((field, index) => {
          if (field >= 0 && field < 100) {
            if (index === 0 && !horizontalBorder.includes(field))
              board[field].occupied = "blocked";
            if (
              index === 1 &&
              !horizontalBorder.map((x) => x - 1).includes(field)
            )
              board[field].occupied = "blocked";
          }
        });
        verticalFields += 10;
      }
      return true;
    }
    return false;
  };

  const receiveAttack = (coordinates) => {
    if (board[coordinates].visited === true) {
      console.log("Field was already used");
    } else if (
      board[coordinates].occupied !== null &&
      board[coordinates].occupied !== "blocked"
    ) {
      console.log("Ship was striked");
      board[coordinates].occupied.hit();
      board[coordinates].visited = true;
    } else {
      board[coordinates].visited = true;
    }
  };

  const areAllSunk = () => {
    let areSunk = true;
    board.forEach((field) => {
      if (
        field.occupied !== null &&
        field.occupied !== "blocked" &&
        field.occupied.isSunk() === false
      ) {
        areSunk = false;
      }
    });
    return areSunk;
  };

  return { board, placeShip, receiveAttack, areAllSunk };
};

export default GameBoard;
export { size };
