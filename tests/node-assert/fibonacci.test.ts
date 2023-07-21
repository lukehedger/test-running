import assert from 'node:assert/strict';
import { fibonacciRecursive } from '../../fibonacci';

export function testFibonacciRecursive() {
  assert.equal(fibonacciRecursive(40), 102334155);
  assert.equal(fibonacciRecursive(43), 433494437);
  assert.equal(fibonacciRecursive(45), 1134903170);
}
