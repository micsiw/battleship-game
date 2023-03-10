const Ship = (size) => {
  let health = size;
  let sunk = false;

  const hit = () => {
    health -= 1;
  };

  const isSunk = () => {
    if (health < 1) {
      sunk = true;
    } else {
      sunk = false;
    }
    return sunk;
  };

  return {
    getHealth: () => health,
    getSize: () => size,
    hit,
    isSunk,
  };
};

export default Ship;
