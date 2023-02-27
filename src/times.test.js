const { times } = require("./times");
const { test, expect } = require("@jest/globals");

test("adds 1 * 2 to equal 2", () => {
  expect(times(1, 2)).toBe(3);
});
