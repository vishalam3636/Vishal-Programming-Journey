/**
 * There are three ways to create a variable=
 * 1. var: functional scope, re-declaration allowed, re assign allowed, hpisted with undefined value
 * 2. let: block scope, re-declaration not allowed, re-assign allowed, hoisted but in tdz
 * 3. const:  block scope, re-declaration not allowed, re-assign not allowed, hoisted but in tdz
 */

var fname = "Vishal"; // string
let mname = "Singh"; // number
let lname = "Chauhan"; // number

//===================================//
//======= Data types in JS- =========//
//===================================//
/**
 * Datatypes in JS is characterized in two categories-
 * 1. Primitive (value type)
 * 2. Non-Primitive (reference type i.e; object and array)
 */

// Primitive
let text = "Hello"; // string
let number = 36; // number
let isTrue = true; // boolean
let futureVal; // undefined
let nothing = null; // object
let symbolVar = Symbol(); // symbol

// Non-primitive
let person = {
  fName: "Vishal",
  lName: "Chauhan",
  hobbies: ["Coding", "Soccer", "Swimming", "Watching Anime"],
  fullName() {
    return `${this.fName} ${this.lName}`;
  },
};
// console.log(person.fullName());

//===================================//
//======== Data Conversions =========//
//===================================//
/**
 * Data conversion-
 * 1. coercion (Implicit Type Conversion): JS changes the datatype itself
 * 2. Type Casting ( Explicit Type Conversion): We change the datatype manually
 */

//==== coercion ====//
let num1 = 5;
let num2 = "7";
// console.log(num1 + num2); // num1 is coerced to string
// console.log(num1 * num2); // num2 is coerced to num
// // console.log(num1 > num2); // JavaScript performs coercion to a number (num2 string to number) before comparing.
// console.log(true + 5); // 6, true coerced to 1
// console.log(true - 5); // -4,  true coerced to 1
// console.log(true > 4); // false, true coerced to 1
// console.log(true < 4); // true, true coerced to 1
// console.log(["vishal"] + ["chauhan"]); // coerced objects (including arrays) to strings when one or both operands are objects.

//==== conversion ====//
// console.log(typeof Number("45")); // converting to num
// console.log(Number("45a" * 4)); // NaN, type is number, but an invalid number

//==============================================//
//======== Arithmetic Operations In JS =========//
//==============================================//
let numOp1 = 3;
let numOp2 = 10;

let sum = numOp1 + numOp2;
let diff = numOp2 - numOp1;
let product = numOp1 * numOp2;
let quotient = numOp2 / numOp1;
let remainder = numOp2 % numOp1;
let power = numOp2 ** numOp1;

//==============================================//
//========= Comparison Operations In JS ========//
//==============================================//
let x = 5;
let y = "10";

// console.log(x == y); // false
// console.log(x === y); // false (strict comparison)
// console.log(x != y); // true
// console.log(x !== y); // false (strict comparison)
// console.log(x > y); // false
// console.log(x < y); // true
// console.log(x <= y); // true
// console.log(x >= y); // false

//==============================================//
//======= Play with Core-JS and Node.js ========//
//==============================================//
/**
 * Play with two libraries for both of them
 * 1. Core.js: Math and Date
 * 2. Node.js: crypto and http
 */

//===  Math ===//
// console.log(Math.max(4, 9, 1, 5, 7));
// console.log(Math.min(4, 9, 1, 5, 7));

// console.log(Math.random()); // between 0 and 1 i.e; 0.0xxxx - 0.9xxxx
// console.log(Math.ceil(Math.random() * 10)); // 1 - 9
// console.log(Math.ceil(Math.random() * 6)); // 1 - 6
console.log(Math.floor(Math.random() * 10)); // 0 - 9
console.log(Math.floor(Math.random() * 6)); // 0 - 5
