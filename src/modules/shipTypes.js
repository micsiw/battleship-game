import Ship from "./ship";

const types = {
  Carrier: Ship(5),
  Battleship: Ship(4),
  Cruiser: Ship(3),
  Submarine: Ship(3),
  Destroyer: Ship(2),
};

export default types;
