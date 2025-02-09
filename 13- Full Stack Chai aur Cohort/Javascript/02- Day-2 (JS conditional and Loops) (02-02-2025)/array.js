let fruits = ["apple", "banana", "cherry"];
let intFruits = new Array("kiwi", "avacado", "dragon fruit");

console.log(fruits.length); // length of array

console.log(fruits[0]);
fruits[0] = "Blueberry"; // assigning new value to arrays index value 0
console.log(fruits[0]);

// Array methods
// (Adding)
fruits.push("new fruit one"); // add new fruit to end of array
fruits.unshift("new fruit two"); // add new fruit to start of array
console.log(fruits);

// Removing
fruits.pop(); // remove last element
fruits.shift(); // remove from first
console.log(fruits);
