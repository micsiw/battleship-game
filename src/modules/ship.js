const Ship = (size) => {
  let health = size;
  let sunk = false;

  const hit = () => health--;

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
    hit,
    isSunk,
  };
};

export default Ship;
