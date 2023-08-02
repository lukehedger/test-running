/*
Write your tests here!

Remember to implement these tests:
  assert.equal(fibonacciRecursive(40), 102334155);
  assert.equal(fibonacciRecursive(43), 433494437);
  assert.equal(fibonacciRecursive(45), 1134903170);
*/

import {fibonacciRecursive} from '../../fibonacci.ts';
// @ts-ignore Import module
import { assertEquals } from 'https://deno.land/std@0.196.0/testing/asserts.ts';

Deno.test("fibonacciRecursive(40) should return 102334155", () => {
  assertEquals(fibonacciRecursive(40), 102334155);
});

Deno.test("fibonacciRecursive(43) should return 433494437", () => {
  assertEquals(fibonacciRecursive(43), 433494437);
});

Deno.test("fibonacciRecursive(45) should return 1134903170", () => {
  assertEquals(fibonacciRecursive(45), 1134903170);
});
