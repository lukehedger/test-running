
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

