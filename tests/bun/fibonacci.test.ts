import {expect, test, describe} from "bun:test";
import {fibonacciRecursive} from "../../fibonacci";

describe("fibonacciRecursive", () => {
  test("40 should return 102334155", () => {
    expect(fibonacciRecursive(40)).toBe(102334155);
  });
  test("43 should return 433494437", () => {
    expect(fibonacciRecursive(43)).toBe(433494437);
  });
  test("45 should return 1134903170", () => {
    expect(fibonacciRecursive(45)).toBe(1134903170);
  });
});
