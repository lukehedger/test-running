# test-running

Let's go down the test runner rabbit hole ⛳️🐇

### Constraints

- Write code and tests in TypeScript
- Total job time <35s
- Test execution time <20s

### Comparison

We will compare the following testing stacks:

- [Jest with ts-jest](https://kulshekhar.github.io/ts-jest/docs/getting-started/installation)
- [Jest with swc](https://github.com/swc-project/jest)
- [Vitest](https://vitest.dev/)
- [Deno](https://deno.land/manual@v1.35.2/basics/testing)
- [Bun](https://bun.sh/docs/cli/test)
- [Node.js assert](https://nodejs.org/api/assert.html) (with [tsx](https://github.com/esbuild-kit/tsx))
- New challengers welcome!

#### Results

| Stack                      | Job time | Execute time |
| -------------------------- | -------- | ------------ |
| Bun                        | 23s      | 15s          |
| Deno                       | 30s      | 24s          |
| Jest with swc              | 32s      | 15s          |
| Jest with ts-jest          | 38s      | 22s          |
| Node.js assert (+ xv, tsx) | 38s      | 23s          |
| Vitest                     | 35s      | 20s          |

#### Test case

To run our benchmarks we are using a function to calculate the n-th number in the Fibonacci sequence using a deliberately naive recursive approach. The Fibonacci sequence grows exponentially, and the recursive nature of the function makes it highly inefficient for large values of n.

```
function fibonacciRecursive(n: number): number {
  if (n <= 0) {
    throw new Error('Invalid input. n should be a positive integer greater than 0.');
  }

  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}
```

In this code, the fibonacciRecursive function calculates the n-th number in the Fibonacci sequence. It uses a naive recursive approach by calling itself twice with n - 1 and n - 2 until it reaches the base cases (n === 1 or n === 2), at which point it returns 1.

The Fibonacci sequence grows rapidly, and the recursive function has exponential time complexity. Calculating the 40th Fibonacci number using this approach will take a noticeable amount of time. For inputNumber larger than around 40-45, the calculation will take a long time and may not finish in a reasonable amount of time due to the exponential growth of the Fibonacci sequence and the inefficiency of the recursive approach.

To ensure consistency across benchmarks, you should implement the follow set of tests:

```
assert.equal(fibonacciRecursive(40), 102334155);
assert.equal(fibonacciRecursive(43), 433494437);
assert.equal(fibonacciRecursive(45), 1134903170);
```
