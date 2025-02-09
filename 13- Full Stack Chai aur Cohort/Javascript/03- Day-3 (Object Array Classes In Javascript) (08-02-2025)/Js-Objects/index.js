/**
 * Use cases of Object: Grouping Data
 *
 */
/*
const person = {
  x: 10,
  firstName: "Vishal",
  lastName: "Chauhan",
  hobbies: ["Coding", "Soccer", "Anime"],
  isMarried: false,
  hasGf: false,
  getFullName: function () {
    return "Vishal Chauhan";
  },
  address: {
    hno: 1,
    street: 1,
    countryCode: "IN",
    state: "UP",
  },
};
console.log(person.address.state);

const remote = {
  color: "Black",
  brand: "XYZ",
  dimensions: { height: 1, width: 1 },
  turnOff: function () {},
  volumeUp: function () {},
  volumeDown: function () {},
};
*/

// Understanding Memory In JS
let fName = "Hitesh";
let fName2 = fName;

console.log(fName);
// console.log(fName2);

fName2 = "Vishal"; // fName2 k change ki value fName mein nahi jayegi, which means fName2 is copied value
console.log(fName);
console.log(fName2);

let p1 = {
  fName: "Hitesh",
  lName: "Chaudhary",
  address: {
    house: 1,
    street: 1,
  },
};
let p2 = p1;

console.log(p1);
console.log(p2);

// p2.fName = "Vishal"; // change in reference, so p2 ke andr ke change p1 mein dikh rha hai
// console.log(p1);
// console.log(p2);

/*
p2 = {
  fName: p1.fName,
  lName: p1.lName,
  address: p1.address,
}; // shallow copy (doing manually)

p2.fName = "Coding";
p2.lName = "Baba";
p2.address.street = 2; // Address referencing to same memory location
console.log(p1);
console.log(p2);
*/

/*
p2 = { ...p1 }; // shallow copy using spread operator
p2.fName = "Coding";
p2.lName = "Baba";
p2.address.street = 2; // Address referencing to same memory location
console.log(p1);
console.log(p2);
*/

// p2 = { ...p1, address: { ...p1.address } }; // its also a shallow copy in a way

const p1KaString = JSON.stringify(p1); // Deep Copy Of Object p1
console.log(p1KaString);
p2 = JSON.parse(p1KaString);

p2.address.street = 2;
console.log(p1);
console.log(p2);

/**
 * Variable is Memory
 * There are two types od memory in any language-
 *                  1. Stack Memory (Primitives: string, number,...)
 *                  2. Heap Memory (Non-Primitives: Array and Object)
 */
