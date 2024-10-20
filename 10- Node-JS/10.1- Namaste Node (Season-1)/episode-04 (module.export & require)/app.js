// require("./sum");

const obj = require("./calculate/sum");
const { calculateSum } = require("./calculate/sum"); //  in case of common js
const { x } = require("./calculate/sum");

// import calculateSum from "./sum.js"; // in case of mjs i.e; module js

let a = 10;
let b = 20;

let c = a + b;

console.log(c);

calculateSum(a, b);

console.log(obj);

console.log(x);
