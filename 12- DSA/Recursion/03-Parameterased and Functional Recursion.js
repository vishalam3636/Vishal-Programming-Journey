/**
 *
 * Problem-1: Sum of first N numbers (Parametarised and Functional ways)
 * N=3, sum=6
 *
 */

// Parameterised Solution
function calcSummissionParameterised(i, sum = 0) {
  if (i < 1) {
    console.log(sum);
    return;
  }

  sum = sum + i;
  i = i - 1;

  calcSummissionParameterised(i, sum);
}
// calcSummissionParameterised(5);

// Functional Solution
function calcSummissionFunctional(i, sum = 0) {
  console.log(i, ">>>i");

  if (i <= 0) {
    return 0;
  }

  return i + calcSummissionFunctional(i - 1);
}
// console.log(calcSummissionFunctional(5));

/**
 *
 * Problem-2: Factorial of N (Parametarised and Functional ways)
 * N=3, sum=6
 *
 */

// 1. Paramterized
function calculateFactorialParamterized(n, result = 1) {
  if (n == 1) {
    console.log(result);
    return;
  }

  return calculateFactorialParamterized(n - 1, result * n);
}

calculateFactorialParamterized(5, 1);

// 2. Functional
function calculateFactorialFunctional(n) {
  if (n == 1) {
    return 1;
  }

  return n * calculateFactorialFunctional(n - 1);
}

console.log(calculateFactorialFunctional(4));
