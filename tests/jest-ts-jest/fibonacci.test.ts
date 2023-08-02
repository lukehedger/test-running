import { fibonacciRecursive } from '../../fibonacci';

describe('fibonacciRecursive', () => {
  test('fibonacciRecursive(40)', () => {
    expect(fibonacciRecursive(40)).toBe(102334155);
  });

  test('fibonacciRecursive(43)', () => {
    expect(fibonacciRecursive(43)).toBe(433494437);
  });

  test('fibonacciRecursive(45)', () => {
    expect(fibonacciRecursive(45)).toBe(1134903170);
  });
});
