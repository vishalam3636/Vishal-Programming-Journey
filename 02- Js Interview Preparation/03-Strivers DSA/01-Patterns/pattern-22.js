/**
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

5 5 5 5 5 5 5 5 5 
5 4 4 4 4 4 4 4 5 
5 4 3 3 3 3 3 4 5 
5 4 3 2 2 2 3 4 5 
5 4 3 2 1 2 3 4 5 
5 4 3 2 2 2 3 4 5 
5 4 3 3 3 3 3 4 5 
5 4 4 4 4 4 4 4 5 
5 5 5 5 5 5 5 5 5

Print the pattern in the function given to you.
*/

function pattern22(n) {
    for(let i=0; i<2*n-1; i++){
        let str="";

        for(let j=0; j<2*n-1; j++){
            let top=i;
            let bottom=(2*n-2)-i;
            let left=j;
            let right=(2*n-2)-j;

            let minDist = Math.min(top, bottom, left, right);
            str += (n - minDist) + " ";
        }

        console.log(str);
    }
}

pattern22(5)