const Player = (name) => {
  const turn = false;
  const ships = [
    "Destroyer",
    "Destroyer",
    "Submarine",
    "Cruiser",
    "Battleship",
    "Carrier",
  ];

  return { name, turn, ships };
};

export default Player;
