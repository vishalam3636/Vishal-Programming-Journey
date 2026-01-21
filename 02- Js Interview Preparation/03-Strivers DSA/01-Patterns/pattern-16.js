/**
 * Pattern-15
 * 
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

A
BB
CCC
DDDD
EEEEE

Print the pattern in the function given to you.
*/

function pattern15(n){
    for(let i=1; i<=n; i++){
        let str = "";

        for(let j=1; j<=i; j++){
            let letter = String.fromCharCode(64+i);
            str+=letter;
        }

        console.log(str)
    }
}

pattern15(5);