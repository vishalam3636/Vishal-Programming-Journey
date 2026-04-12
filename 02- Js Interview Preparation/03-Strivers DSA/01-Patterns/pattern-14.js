/**
 * Pattern-14
 * 
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

A
AB
ABC
ABCD
ABCDE

Print the pattern in the function given to you.
*/

// Sol-1 (NOTE: in ascii num, 65 is A)
function pattern14(n){
    for(let i=1; i<=n; i++){
        let str = "";
        for(let j=1; j<=i; j++){
            let letter = String.fromCharCode(64+j);
            str+=letter;
        }

        console.log(str);
    }
}

pattern14(5)