import { describe, it } from 'vitest';
import { fibonacciRecursive } from '../../fibonacci';

describe('fibonacciRecursive', () => {
  it.concurrent('concurrent test 1', async ({ expect }) => { 
    expect(fibonacciRecursive(40)).toBe(102334155);
  });
  it.concurrent('concurrent test 2', async ({ expect }) => { 
    expect(fibonacciRecursive(43)).toBe(433494437);
  });
  it.concurrent('concurrent test 3', async ({ expect }) => { 
    expect(fibonacciRecursive(45)).toBe(1134903170);
  });
});
