/**
 * Patter-12
 * 
 * Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

1        1
12      21
123    321
1234  4321
1234554321

Print the pattern in the function given to you.
*/

// Sol-1
function pattern12(n){
    for(let i=1; i<=n; i++){
        let str = "";

        for(let j=1; j<=n+n-i; j++){
            if(j<=i){
                str+=j;
            }else{
                str+="_"
            }
        }

        for(let j=i; j>=1; j--){
            str+=j
        }

        console.log(str)
    }
}

pattern12(5)

// sol-2
function pattern12_sol2(n) {
    for(let i=1; i<=n; i++){
        let str = "";
        
        for(let j=1; j<=n; j++){
            if(j<=i){
                str+=j
            }else{
                str+=" "
            }
        }
        
        for(let j=n; j>=1; j--){
            if(j<=i){
                str+=j
            }else{
                str+=" "
            }
        }
        
        console.log(str);
    }
}
pattern12_sol2(7)