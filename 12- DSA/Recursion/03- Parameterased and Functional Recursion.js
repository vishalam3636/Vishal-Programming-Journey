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
// calcSummissionParameterised(6);

// Functional Solution
function calcSummissionFunctional(i, sum = 0) {
  console.log(i, ">>>i");

  if (i <= 0) {
    return 0;
  }

  return i + calcSummissionFunctional(i - 1);
}
console.log(calcSummissionFunctional(5));
