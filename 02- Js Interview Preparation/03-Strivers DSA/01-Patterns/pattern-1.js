/*
Pattern-1

Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

*****
*****
*****
*****
***** 
*/

// sol-1
function pattern1(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= n; j++) {
      str += "*";
    }
    console.log(str);
  }
}

pattern1(5);
