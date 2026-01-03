/**
 * Pattern-3
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

1
12
123
1234
12345
 */

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str += j;
    }

    console.log(str);
  }
}

pattern3(5);
