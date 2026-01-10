/**
 * Pattern-4
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

1
22
333
4444
55555
 */

function pattern4(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str += i;
    }

    console.log(str);
  }
}

pattern4(5);
