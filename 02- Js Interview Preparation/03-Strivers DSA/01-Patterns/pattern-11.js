/**
 * Pattern-11
 * 
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:



1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1

*/

function pattern11(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    if (i % 2 == 1) {
      for (let j = 1; j <= i; j++) {
        str += (j % 2) + " ";
      }
    } else {
      for (let j = 0; j < i; j++) {
        str += (j % 2) + " ";
      }
    }

    console.log(str);
  }
}

pattern11(5);
