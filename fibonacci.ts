export function fibonacciRecursive(n: number): number {
  if (n <= 0) {
    throw new Error('Invalid input. n should be a positive integer greater than 0.');
  }

  if (n === 1 || n === 2) {
    return 1;
  } else {
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
  }
}
