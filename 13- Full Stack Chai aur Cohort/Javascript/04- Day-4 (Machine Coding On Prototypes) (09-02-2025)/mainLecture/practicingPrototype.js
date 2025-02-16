// Create a prototype method called describe on Animal, which prints the name of the animal.

let animalName = "Dog";
let animalName2 = "Lion";

String.prototype.describeAnimal = function () {
  console.log(`The animal name is ${this}`);
};
// animalName.describeAnimal();
// animalName2.describeAnimal();

////////////////////////////////////////////////////
/**
 * Testing and Understanding Prototype
 * Object.prototype krne se sare data types mein method milne lagta hai?
 * Array.prototype krne se only Array mein methods milenge??
 * String.prototype krnse se only String mein methods milenge??
 ****************************************************/
let nameArr = ["vishal", "Raghav", "Ram"];
let personDetails = {
  name: "Vishal",
  hobby: "Coding and playing soccer",
  city: "Kanpur",
};
let str = "Dummy string";

Array.prototype.logDummyText = function () {
  console.log("Array method called for Logged dummy text");
};
// Object.prototype.logDummyText = function () {
//   console.log("Array method called for Logged dummy text");
// };
String.prototype.logDummyText = function () {
  console.log("Array method called for Logged dummy text");
};

nameArr.logDummyText();
// personDetails.logDummyText();
str.logDummyText();

/*
 *  Key Reading:
 *  Array.prototype methods are only available to arrays.
 *  Object.prototype methods are available to all objects, including arrays and strings.
 *  Arrays inherit from Object.prototype, so if a method is in Object.prototype, arrays can still use it.
 */

// Create a method to array to add text against each elem of the array and return a new arr
Array.prototype.addStrToEachArrElem = function (text) {
  let originalArr = this;
  let resultArr = [];

  for (let elem of originalArr) {
    resultArr.push(elem + text);
  }

  return resultArr;
};

let finalResult = nameArr.addStrToEachArrElem("Blaahhh");
// console.log(finalResult, ">>>finalResult");
