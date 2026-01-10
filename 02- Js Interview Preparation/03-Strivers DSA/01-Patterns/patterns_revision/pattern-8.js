/**
 * Pattern-8
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

*********
 *******
  *****
   ***
    *
 */


function pattern8(n) {
  for(let i=n; i>=1; i--){
    let str = "";

    // for space
    for(let j=1; j<=n-i; j++){
      str+="_"
    }

    // for star
    for(let j=1; j<=2*i-1; j++){
      str+="*"
    }

    console.log(str);
  }
}

pattern8(5);
