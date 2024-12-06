/**
 *
 * Problem-1: Sum of first N numbers (Parametarised and Functional ways)
 * N=3, sum=6
 *
 */

// Parameterised Solution
function calcSummission(i, sum = 0) {
  if (i < 1) {
    console.log(sum);
    return;
  }

  sum = sum + i;
  i = i - 1;

  calcSummission(i, sum);
}
calcSummission(5);
