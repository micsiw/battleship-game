import Ship from "../ship";

const randomShip = Ship(5);

test("Ship properly has reduced health when hit", () => {
  randomShip.hit();
  expect(randomShip.getHealth()).toBe(4);
});

test("Ship is sunk when health reaches 0", () => {
  let i = 5;
  while (i > 0) {
    randomShip.hit();
    i--;
  }
  expect(randomShip.isSunk()).toBe(true);
});
