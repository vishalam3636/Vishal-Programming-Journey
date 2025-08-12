// /**
//  *  URL- https://www.youtube.com/watch?v=un6PLygfXrA&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=2
//  *
//  * Problem-1: Print Name 5 times
//  * Problem-2: Print Linearly from 1 to N
//  * Problem-3: Print from N to 1
//  * Problem-4: Print linearly from 1 to N (but by backtracking)
//  * Problem-5: Print from N to 1 (by backtracking)
//  */

// //==============================  Problem-1: ================//
// // (My solution-1)
// let count = 0;

// function printNameOne(name, num) {
//   if (count >= num) {
//     return;
//   }

//   console.log(name, " ", num);

//   count += 1;
//   printNameOne(name, num);
// }
// // printNameOne("Vishal", 5);

// // (My solution-2)
// function printNameTwo(i, n, name) {
//   if (i >= n) {
//     return;
//   }
//   console.log(name, " ", i);

//   i = i + 1;
//   printNameTwo(i, n, name);
// }
// // printNameTwo(0, 5, "Swati");

// // Striver solution
// function printName(i, n) {
//   if (i >= n) {
//     return;
//   }

//   console.log("Vishal");

//   printName(i + 1, n);
// }
// // printName(0, 5);

// //==============================  Problem-2: ================//
// // My Solution-1 (Strivers same solution)
// function printLinearly(n, i = 1) {
//   if (i > n) {
//     return;
//   }

//   console.log(i);
//   i = i + 1;
//   printLinearly(n, i);
// }
// // printLinearly(4);

// //==============================  Problem-3: ================//
// // My solution-1 (same as strivers)
// function printLinearlyReverse(n, i = n) {
//   if (i < 1) {
//     return;
//   }

//   console.log(i);

//   i = i - 1;
//   printLinearlyReverse(n, i);
// }
// // printLinearlyReverse(5);

// //==============================  Problem-4: ================//
// // My Solution: (after watching strivers one time)
// function printLinearlyByBackTracking(n, i = n) {
//   if (i <= 1) {
//     return;
//   }

//   i = i - 1;
//   console.log(i, ">>before function");

//   printLinearlyByBackTracking(n, i);

//   console.log(i);
// }
// // printLinearlyByBackTracking(5);

// //==============================  Problem-5: ================//
// // My Solution: (taking reference from problem-4, make sure to visualize the solution by writing on paper)
// function printLinearlyReverseByBackTracking(n, i = 0) {
//   if (i >= n) {
//     return;
//   }

//   i = i + 1;
//   printLinearlyReverseByBackTracking(n, i);

//   console.log(i);
// }
// printLinearlyReverseByBackTracking(5);

///////////////// Revision ///////////////
// print name n times
// my solution-1
let num = 0;
function printName() {
  if (num == 5) {
    return;
  }
  num++;
  console.log("vishal");
  printName();
}

// printName();

// my solution-2
function printNameTwo() {
  if (num == 5) {
    return;
  }
  num++;
  printNameTwo();
  console.log("Vishal-2");
}

// printNameTwo();

// my solution-3
function printNameThree(num = 0) {
  if (num == 3) {
    return;
  }
  console.log("Vishal-3");
  num++;
  printNameThree(num);
}

// printNameThree();

// Strivers solution
function printStrivers(i, n) {
  if (i > n) {
    return;
  }

  console.log("Vishal-strivers");
  printStrivers(i + 1, n);
}

// printStrivers(0, 5);

// Problem-2: Print linerly from 1 to n
function printLinearly(i, n) {
  if (i > n) {
    return;
  }
  console.log(i);
  printLinearly(i + 1, n);
}

// printLinearly(0, 6);

// Problem-3: Print from N to 1
function printOpposite(n) {
  if (n == 0) {
    return;
  }

  console.log(n);
  printOpposite(n - 1);
}

// printOpposite(5);

// Problem-4: Print from 1 to N (but by backtrack)
function linearbackTrack(i, n) {
  if (i < 1) {
    return;
  }
  linearbackTrack(i - 1, n);
  console.log(i);
}

// linearbackTrack(5, 5);

// Problem-4: Print from n to 1 (but by backtrack)
function printOppositeBacktrack(i, n) {
  if (i > n) {
    return;
  }

  printOppositeBacktrack(i + 1, n);
  console.log(i);
}

printOppositeBacktrack(0, 10);
