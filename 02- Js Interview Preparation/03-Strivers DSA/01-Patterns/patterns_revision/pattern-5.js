/**
 * Pattern-5
 * 
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

*****
****
***
**
*

*/

function pattern5(n) {
  for(let i=n; i>=1; i--){
    let str = "";

    for(let j=1; j<=i; j++){
      str+="*";
    }

    console.log(str);
  }
}

pattern5(5);
