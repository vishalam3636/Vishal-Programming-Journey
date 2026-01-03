/**
 * Pattern-7
 * 
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
 
    *
   ***
  *****
 *******
*********

*/

function pattern7(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n - i; j++) {
      str += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }

    console.log(str);
  }
}

pattern7(5);

// function pattern7(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";

//     for (let j = 1; j <= n - i; j++) {
//       str += "_";
//     }

//     for (let j = 1; j <= 2 * i - 1; j++) {
//       str += "*";
//     }

//     console.log(str);
//   }
// }

// pattern7(5);
