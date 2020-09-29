const Potion = require("../lib/Potion");

test("creates a healing potion objects", () => {
  // creates potion object with name of health
  const potion = new Potion("health");

  // expects potions name to be health
  expect(potion.name).toBe("health");
  //   expects potions value to be a number
  expect(potion.value).toEqual(expect.any(Number));
});

test("creates random potion object", () => {
  const potion = new Potion();

  expect(potion.name).toEqual(expect.any(String));
  expect(potion.name.length).toBeGreaterThan(0);
  expect(potion.value).toEqual(expect.any(Number));
});
