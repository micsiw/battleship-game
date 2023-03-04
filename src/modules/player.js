const Player = (name) => {
  const turn = false;
  const ships = [
    "Carrier",
    "Battleship",
    "Cruiser",
    "Submarine",
    "Destroyer",
    "Destroyer",
  ];

  return { name, turn, ships };
};

export default Player;
