/**
 * Pattern-9
 * 
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:



    * 
   ***
  *****
 *******
*********
*********
 *******
  *****
   ***
    *

 */

function pattern9(n) {
  for(let i=1; i<=n; i++){
    let str = "";

    // for space
    for(let j=1; j<=n-i; j++){
      str+="_"
    }

    // for str
    for(let j=1; j<=2*i-1; j++){
      str+="*";
    }

    console.log(str);
  }

  for(let i=n; i>=1; i--){
    let str = "";

    // for space
    for(let j=1; j<=n-i; j++){
      str+="_"
    }

    // for str
    for(let j=1; j<=2*i-1; j++){
      str+="*";
    }

    console.log(str);

  }
}

pattern9(5);
