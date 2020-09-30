const Player = require("../lib/Player");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion");

// tests player object
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

// tests player stats
test("gets player's stats as an object", () => {
  const player = new Player("Matthew");

  expect(player.getStats()).toHaveProperty("potions");
  expect(player.getStats()).toHaveProperty("health");
  expect(player.getStats()).toHaveProperty("strength");
  expect(player.getStats()).toHaveProperty("agility");
});

// tests inventory method
test("gets inventory from player or returns false", () => {
  const player = new Player("Matthew");

  expect(player.getInventory()).toEqual(expect.any(Array));
  player.inventory = [];
  expect(player.getInventory()).toEqual(false);
});

// tests player health
test("gets players health", () => {
  const player = new Player("Matthew");

  expect(player.getHealth()).toEqual(
    expect.stringContaining(player.health.toString())
  );
});

// checks if player is alive
test("checks players health for death", () => {
  const player = new Player("Matthew");

  expect(player.isAlive()).toBeTruthy();

  player.health = 0;

  expect(player.isAlive()).toBeFalsy();
});

// subtracts health
test("subtracts health from player", () => {
  const player = new Player("Matthew");
  const oldHealth = player.health;

  player.reduceHealth(5);

  expect(player.health).toBe(oldHealth - 5);

  player.reduceHealth(99999);

  expect(player.health).toBe(0);
});
