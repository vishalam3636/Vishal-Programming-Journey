/**
 * Understanding setTimeout:
 * it delays any code, it takes a callback function as a first param and the second param is the time in delay (in ms, 1s=1000ms)
 *
 *
 * what if we want to run the code in setTimeout before "bye bye" ???
 * i.e; What if want to run the code in setTimeout at the place where its called!!
 *
 *
 * What is starvation: jab humare kuch tasks callback queue mein gaye ho and bahot se tasks microtasks queue mein gaye ho, and event-loop ko chance na mil rha ho to get the tasks from callback queue, use starvation bolte hain
 */

const obj = {
  name: "Vishal Chauhan",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

console.log("Hello from JS !!");

// setTimeout(obj.greet, 2 * 1000); // obj.greet jab call hua, use undefined nahi mila because call stack se memory allocation khali ho gaya as code sab run ho chuka hoga after "Bye bye"

/*
setTimeout(() => {
  console.log(`hello after 2s `, 2 * 1000);
});
Promise.resolve().then((res) => {
  console.log("PROMISE RESOLVED");
});
*/

// Starvation
/*
Promise.resolve().then(function p1() {
  console.log("1. Reolve ho gaya");

  Promise.resolve().then(function p2() {
    console.log("2. Reolve ho gaya");

    Promise.resolve().then(function p3() {
      console.log("3. Reolve ho gaya");

      Promise.resolve().then(function p4() {
        console.log("4. Reolve ho gaya");

        Promise.resolve().then(function p5() {
          console.log("5. Reolve ho gaya");

          Promise.resolve().then(function p6() {
            console.log("6. Reolve ho gaya");

            // aise hi infinite Promises call ho jayein.....
          });
        });
      });
    });
  });
});

console.log("Bye bye !!");
*/

/////////////////////////////////////////////////
/**
 * ====== Hoisting in JS =======
 *
 * Hoisting is a default behaviour of JS where all the variables and function declaration appear to move to the top of the code
 * NOTE: variables declared with var, let and const, all gets hoisted. But the var hoisted with the value undefined awhile the let and const are in TDZ and can be accessed before initialization
 *
 * function is delcared with the complete block, i.e; hoisted completely
 *
 */

console.log(fName); // undefined
// console.log(mName); // ReferenceError: Cannot access 'mName' before initialization
// console.log(lName); // ReferenceError: Cannot access 'lName' before initialization
logVal(); // Hello world
// testFunc(); // ReferenceError: Cannot access 'testFunc' before initialization

var fName = "Vishal";
let mName = "Singh";
const lName = "Chauhan";

function logVal() {
  console.log("Hello World !!!");
}

let testFunc = () => {
  console.log("Hello Vishal !!!");
};
