import {expect, test, describe} from "bun:test";
import {fibonacciRecursive} from "../../fibonacci";

test("2 + 2", () => {
  expect(2 + 2).toBe(4);
});

/*
Write your tests here!

Remember to implement these tests:
  assert.equal(fibonacciRecursive(40), 102334155);
  assert.equal(fibonacciRecursive(43), 433494437);
  assert.equal(fibonacciRecursive(45), 1134903170);
*/

describe("fibonacciRecursive", () => {
  test("40 should return 102334155", () => {
    expect(fibonacciRecursive(40)).toBe(102334155);
  });
  test("50 should return 12586269025", () => {
    expect(fibonacciRecursive(50)).toBe(12586269025);
  });
  test("43 should return 433494437", () => {
    expect(fibonacciRecursive(43)).toBe(433494437);
  });
  test("45 should return 1134903170", () => {
    expect(fibonacciRecursive(45)).toBe(1134903170);
  });
});
