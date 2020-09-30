const Enemy = require("../lib/Enemy");
const Potion = require("../lib/Potion");

jest.mock("../lib/Potion.js");

test("Creates enemy object", () => {
  const enemy = new Enemy("goblin", "sword");

  expect(enemy.name).toBe("goblin");
  expect(enemy.weapon).toBe("sword");
  expect(enemy.health).toEqual(expect.any(Number));
  expect(enemy.strength).toEqual(expect.any(Number));
  expect(enemy.agility).toEqual(expect.any(Number));
  expect(enemy.potion).toEqual(expect.any(Object));
});

// tests enemy health
test("gets enemys health", () => {
  const enemy = new Enemy("goblin", "sword");

  expect(enemy.getHealth()).toEqual(
    expect.stringContaining(enemy.health.toString())
  );
});

// checks if enemy is alive
test("checks enemys health for death", () => {
  const enemy = new Enemy("goblin", "sword");

  expect(enemy.isAlive()).toBeTruthy();

  enemy.health = 0;

  expect(enemy.isAlive()).toBeFalsy();
});

// subtracts health
test("subtracts health from enemy", () => {
  const enemy = new Enemy("goblin", "sword");
  const oldHealth = enemy.health;

  enemy.reduceHealth(5);

  expect(enemy.health).toBe(oldHealth - 5);

  enemy.reduceHealth(99999);

  expect(enemy.health).toBe(0);
});

// gets enemy attack
test("gets enemys attack value", () => {
  const enemy = new Enemy("goblin", "sword");

  enemy.strength = 10;

  expect(enemy.getAttackValue()).toBeGreaterThanOrEqual(5);
  expect(enemy.getAttackValue()).toBeLessThanOrEqual(15);
});

// checks for weapon
test("gets description of enemy", () => {
  const enemy = new Enemy("goblin", "sword");

  expect(enemy.getDescription()).toEqual(expect.stringContaining("goblin"));
  expect(enemy.getDescription()).toEqual(expect.stringContaining("sword"));
});
