/**
 * Pattern-10
 * 
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

*
**
***
****
*****
****
***
**
*

*/

function pattern10(n) {
  for(let i=1; i<=n; i++){
    let str = "";

    for(let j=1; j<=i; j++){
      str+="*"
    }

    console.log(str)
  }

  for(let i=n-1; i>=1; i--){
    let str = "";

    for(let j=1; j<=i; j++){
      str+="*"
    }

    console.log(str)
  }
}

pattern10(5);
