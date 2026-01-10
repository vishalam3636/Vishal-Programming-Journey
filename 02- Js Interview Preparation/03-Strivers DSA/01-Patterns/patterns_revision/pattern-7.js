/**
 * Pattern-7
 * 
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
 
    *
   ***
  *****
 *******
*********

*/



// Sol-1
function pattern7Sol1(n){
  for(let i=1; i<=n; i++){
    let str = "";

    for(let j=1; j<=n-i; j++){
      str+="_"
    }

    for(let j=1; j<=2*i-1; j++){
      str+="*";
    }

    console.log(str);
  }
}
pattern7Sol1(5)

// Sol-2
function pattern7Sol2(n){
  for(let i=1; i<=n; i++){
    let str = "";

    let spaceCount = n-i;
    let starCount = 2*i-1;
    let totalCount = spaceCount + starCount;

    for(let j=1; j<=totalCount; j++){
      if(j<=spaceCount){
        str+="_";
      }else{
        str+="*"
      }
    }

    console.log(str);
  }
}

pattern7Sol2(5);