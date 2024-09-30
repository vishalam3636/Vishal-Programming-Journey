// require("./sum");

const obj = require("./sum");
const { calculateSum } = require("./sum"); //  in case of common js
const { x } = require("./sum");

// import calculateSum from "./sum.js"; // in case of mjs i.e; module js

let a = 10;
let b = 20;

let c = a + b;

console.log(c);

calculateSum(a, b);

console.log(obj);

console.log(x);
