/**
 * Problem-1: Print Name 5 times
 * Problem-2: Print Linearly from 1 to N
 * Problem-3: Print from N to 1
 * Problem-4: Print linearly from 1 to N (but by backtracking)
 * Problem-5: Print from N to 1 (by backtracking)
 */

// Problem-1: (My solution)

let count = 0;

function printName(name, num) {
  if (count >= num) {
    return;
  }

  console.log(name, " ", num);

  printName(name, count + 1);
}

printName("Vishal", 5);
