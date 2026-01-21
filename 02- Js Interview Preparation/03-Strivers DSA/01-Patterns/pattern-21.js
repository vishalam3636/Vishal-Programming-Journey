/**
 * Pattern-21
 * 
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

*****
*   *
*   *
*   *
*****


Print the pattern in the function given to you.

*/

function pattern21(n){
    for(let i=1; i<=n; i++){
        let str = "";

        if(i==1 || i==n){
            for(let j=1; j<=n; j++){
                str+="*"
            }
        }else{
            for(j=1; j<=n;j++){
                if(j==1 || j==n){
                    str+="*"
                }else{
                    str+=" "
                }
            }
        }

        console.log(str);
    }
}

pattern21(5)