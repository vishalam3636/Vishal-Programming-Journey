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
  for(let i=1; i<=n; i++){
    let str = "";

    for(let j=1; j<=i; j++){
       if((i+j)%2 == 0){
        str+=1
       }else{
        str+=0
       }
       str+=" "
    }

    console.log(str)
  }
}

pattern11(5);
