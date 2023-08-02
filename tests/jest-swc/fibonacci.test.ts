/*
Write your tests here!

Remember to implement these tests:
  assert.equal(fibonacciRecursive(40), 102334155);
  assert.equal(fibonacciRecursive(43), 433494437);
  assert.equal(fibonacciRecursive(45), 1134903170);
*/
import { fibonacciRecursive } from '../../fibonacci';

describe('fibonacciRecursive', () => {
  it('should throw an error for invalid input', () => {
    expect(fibonacciRecursive(40)).toBe(102334155);
  });

  it('should return the correct value for valid input', () => {
    expect(fibonacciRecursive(43)).toBe(433494437);
  });

  it('should return the correct value for valid input', () => {
    expect(fibonacciRecursive(45)).toBe(1134903170);
  });
});

