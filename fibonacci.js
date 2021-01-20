// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

  const result = [0, 1]; // for loop won't produce this/add it so we initialize the array with [0, 1].

  for(let i = 2; i <= n; i++) {
    const a = result[result.length - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];

}

console.log(fib(1)); // 1
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3
console.log(fib(39)); // 63245986
