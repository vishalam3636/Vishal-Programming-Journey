function addTwo(num) {
    // num.toUpperCase; //  error TS2339: Property 'toUpperCase' does not exist on type 'number'.
    return num + 2;
}
addTwo(5);
console.log(addTwo(10));
function getUpper(val) {
    return val.toUpperCase;
}
getUpper("vishal");
function signUpUser(name, email, isPaid) {
}
signUpUser("vihal", "vishal@gmail.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("v", "v@gmail.com");
var addVal = function (num1, num2) {
    return num1 + num2;
    // return "dummy text" // even the string is returning and on hovering over result its giving string type, which isnt okay
};
var result = addVal(4, 6);
console.log(result);
var addVal2 = function (num1, num2) {
    return num1 + num2;
    // return "text" // gives error when returning string
};
var result2 = addVal2(5, 7);
console.log(result2);
// function getValue(myVal:number):string{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return s;
};
getHello("Hello");
var heros = ["thor", "spiderman", "ironman"];
// const heros  = [1, 2, 3];
heros.map(function (hero) {
    return "hero is  ".concat(hero);
    // return 1;
});
function consoleError(errMsg) {
    console.log(errMsg);
    // return "something" // returning something will give error as we have set void type in return
}
function handleError(errMsg) {
    throw new Error("errmsg");
    // return "something"; // error because we are returning something in return type never
}
