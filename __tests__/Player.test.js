const Player = require("../lib/Player");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");

test("creates player object", () => {
  const player = new Player("Matthew");

  expect(player.name).toBe("Matthew");
  expect(player.health).toEqual(expect.any(Number));
  expect(player.strength).toEqual(expect.any(Number));
  expect(player.agility).toEqual(expect.any(Number));

  expect(player.inventory).toEqual(
    expect.arrayContaining([expect.any(Object)])
  );
});
