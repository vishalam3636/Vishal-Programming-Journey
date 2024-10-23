function addTwo(num:number){
    // num.toUpperCase; //  error TS2339: Property 'toUpperCase' does not exist on type 'number'.
    return num + 2;
}
addTwo(5);
console.log(addTwo(10));


function getUpper(val: string){
    return val.toUpperCase;
}
getUpper("vishal")

function signUpUser(name:string, email:string, isPaid: boolean){

}
signUpUser("vihal","vishal@gmail.com",false);


let loginUser = (name: string, email:string, isPaid:boolean=false) => {

} 
loginUser("v", "v@gmail.com");


let addVal = (num1:number, num2:number) => {
    return num1 + num2;
    // return "dummy text" // even the string is returning and on hovering over result its giving string type, which isnt okay
}
let result = addVal(4,6);
console.log(result);

let addVal2 = (num1:number, num2:number):number => {
    return num1 + num2;
    // return "text" // gives error when returning string
}
let result2 = addVal2(5,7);
console.log(result2);

// function getValue(myVal:number):string{
//     if(myVal > 5){
//         return true
//     }

//     return "200 OK"
// }

const getHello = (s: string):string => {
    return s
}
getHello("Hello")


const heros  = ["thor", "spiderman", "ironman"];
// const heros  = [1, 2, 3];

heros.map((hero):string => {
    return `hero is  ${hero}`;
    // return 1;
})

function consoleError(errMsg: string):void{
    console.log(errMsg);
    // return "something" // returning something will give error as we have set void type in return
}

function handleError(errMsg: string):never{
    throw new Error("errmsg");
    // return "something"; // error because we are returning something in return type never
}


export{}