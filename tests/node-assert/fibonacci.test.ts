import { describe, it } from 'node:test'
import assert from 'node:assert/strict';
import { fibonacciRecursive } from '../../fibonacci';

describe('fibonacciRecursive', { concurrency: true }, () => {
  it('fibonacciRecursive(40)', async () => {
    assert.equal(fibonacciRecursive(40), 102334155);
  });

  it('fibonacciRecursive(43)', async () => {
    assert.equal(fibonacciRecursive(43), 433494437);
  });

  it('fibonacciRecursive(45)', async () => {
    assert.equal(fibonacciRecursive(45), 1134903170);
  });
});
