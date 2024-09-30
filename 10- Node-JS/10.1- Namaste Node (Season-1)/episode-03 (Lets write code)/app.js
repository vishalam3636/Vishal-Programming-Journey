// Episode-03 (Let's write code)
/**
 * TOPICS COVERED-
 * 1. Install Node.js
 *                  -> nodejs.org
 * 2. Run a js file
 *                  -> npm run filename.js
 * 3. global object
 * 4. "this" in global is not same as "global"
 * 5. "globalThis" is same as "global" object
 * 6. In browser, "window", "this", "self", "frames" are global objects
 */

var a = 10;
var b = 20;
console.log(a + b);

// console.log(global); // global object
// console.log(this); // empty object
// console.log(globalThis); // same global object as global

console.log(this == globalThis); // false
console.log(global == globalThis); // true, i.e; pointing at same global object
