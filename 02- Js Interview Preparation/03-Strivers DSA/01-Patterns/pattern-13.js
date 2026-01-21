/**
 * Patter-13
 * 
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

1 
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15

Print the pattern in the function given to you.
*/

// sol-1
function pattern13(n){
    let num = 1;
    for(let i=1; i<=n; i++){
        let str = "";

        for(let j=1; j<=i; j++){
            str+=num;
            str+=" "
            num++
        }

        console.log(str)
    }
}

pattern13(5)