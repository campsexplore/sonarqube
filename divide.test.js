const { divide } = require("./divide");
const { test, expect } = require("@jest/globals");

test("divides 1 / 2 to equal 0.5", () => {
  expect(divide(1, 2)).toBe(0.5);
});
