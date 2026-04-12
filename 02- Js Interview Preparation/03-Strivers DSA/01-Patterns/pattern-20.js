/**
 * Pattern-20
 * 
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
 * 

*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *

Print the pattern in the function given to you.
 */

function pattern20(n){
    for(let i=n; i>=1; i--){
        let str="";

        let spaces = 2*i-2;
        let allStars = 2*n-spaces;
        // console.log(spaces);
        // console.log(allStars, ">>>all starrs");


        // for first stars
        for(let j=1; j<=allStars/2; j++){
            str+="*"
        }

        // for spaces
        for(let j=1; j<=spaces; j++){
            str+="_"
        }

        for(let j=1; j<=allStars/2; j++){
            str+="*"
        }

        console.log(str)
    }

    for(let i=2; i<=n; i++){
        let str="";

        let spaces = 2*i-2;
        let allStars = 2*n-spaces;
        
        // for first stars
        for(let j=1; j<=allStars/2; j++){
            str+="*"
        }

        // for spaces
        for(let j=1; j<=spaces; j++){
            str+="_"
        }

        for(let j=1; j<=allStars/2; j++){
            str+="*"
        }

        console.log(str)
    }
}

pattern20(5)