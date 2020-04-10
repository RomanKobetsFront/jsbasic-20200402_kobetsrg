/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    let count = n - 1;
    while (count) {
      n *= count;
      count--;
    }
    return n;
  }
}
