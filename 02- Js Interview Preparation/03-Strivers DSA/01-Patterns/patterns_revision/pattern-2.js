/**
 * Pattern-2
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

*
**
***
****
*****
 */

function pattern2(n){
  for(let i=1; i<=n; i++){
    let str = "";

    for(let j=1; j<=i; j++){
      str+="*"
    }

    console.log(str);
  }
}

pattern2(5)