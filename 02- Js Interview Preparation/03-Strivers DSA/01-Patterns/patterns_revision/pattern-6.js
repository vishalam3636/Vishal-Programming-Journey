/**
 * Pattern-6
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

12345
1234
123
12
1

*/

function pattern6(n) {
  for(let i=n; i>=1; i--){
    let str = "";

    for(let j=1; j<=i; j++){
      str+=j;
    }

    console.log(str);
  }
}

pattern6(5);
