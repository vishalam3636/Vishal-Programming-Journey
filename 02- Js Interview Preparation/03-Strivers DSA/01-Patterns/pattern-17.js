/**
 * Pattern-17
 * 
 * 
Track
Command Palette
Search for a command to run...

Vishal Chauhan
Progress
Day 246/150


FindBorderBarSize
Pattern 17
Easy

Company
Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA


Print the pattern in the function given to you.
*/

function pattern17(n){
    for(let i=1; i<=n; i++){
        let str = "";

        // for space
        for(let j=1; j<=n-i; j++){
            str+=" "
        }

        // for lettrs
        for(let j=1; j<=2*i-1; j++){
            if(j==i){
                str+=String.fromCharCode(64+j)
            }else if(j<i){
                str+=String.fromCharCode(64+j);
            }else{
                str+=String.fromCharCode(64+(2*i-j))
            }
        }

        console.log(str);
    }
}

pattern17(5)