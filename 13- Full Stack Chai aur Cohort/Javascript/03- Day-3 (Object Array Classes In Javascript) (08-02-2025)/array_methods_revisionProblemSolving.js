// ================================//
//=========== MY SOLUTIONs ===========//
// ================================//
/**
 * Caffeinated: "Matcha", "Pu-Erh Tea", "Black Tea", "Yerba Mate", "Oolong Tea", "Green Tea",
 * Non-Caffeinated: "Lemongrass Tea", "Chamomile Tea", "Ginger Tea", "Rosehip Tea",
 */

// Problem: Create an Array containing different types of Teas
let allteas = [
  "Matcha",
  "Pu-Erh Tea",
  "Black Tea",
  "Yerba Mate",
  "Oolong Tea",
  "Green Tea",
  "Lemongrass Tea",
  "Chamomile Tea",
  "Ginger Tea",
  "Rosehip Tea",
];

// Problem: Add "Chamomile Tea" to the existing list of teas
allteas.push("Chamomile Tea");
// console.log(allteas, ">>>added Oolong tea");

// Problem: Remove "Oolong Tea" from the list of teas
// == Method-1 == //
let newListOfTeas1 = [];
for (let i = 0; i < allteas.length; i++) {
  if (allteas[i] !== "Oolong Tea") {
    newListOfTeas1.push(allteas[i]);
  }
}
// console.log(newListOfTeas1, ">>>");

// == Method-2 == //
let copyTeas = [...allteas];
let newListOfTeas2 = copyTeas.filter((tea) => tea !== "Oolong Tea");
// console.log(newListOfTeas2, ">>>newListOfTeas2");

// == Method-3 ==//
let indexOfOolong = copyTeas.indexOf("Oolong Tea");
if (indexOfOolong > -1) {
  copyTeas.splice(4, 1);
}
// console.log(copyTeas);

// Problem: Filter the list to only include teas that are caffeinated.
let nonCaffeinated = [
  "Lemongrass Tea",
  "Chamomile Tea",
  "Ginger Tea",
  "Rosehip Tea",
];

//== method-1 (for-loop) ==//
let onlyCaffeinated1 = [];
for (let i = 0; i < allteas.length; i++) {
  if (!nonCaffeinated.includes(allteas[i])) {
    onlyCaffeinated1.push(allteas[i]);
  }
}
// console.log(onlyCaffeinated1, ">>>only caffeinated for loop");

let onlyCaffeinated2 = allteas.filter((tea) => !nonCaffeinated.includes(tea));
// console.log(onlyCaffeinated2, ">>>onlyCaffeinated2");

// Problem: Sort the list of teas in alphabetical order.
let copyAllteas = [...allteas];
let sortedAllTeas = copyAllteas.sort();
// console.log(sortedAllTeas, ">>sorted all teas");

// Problem: Use a for loop to print each type of tea in the array.
for (let i = 0; i < allteas.length; i++) {
  //   console.log(allteas[i]);
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")
nonCaffeinated = [
  "Lemongrass Tea",
  "Chamomile Tea",
  "Ginger Tea",
  "Rosehip Tea",
];

let caffeinatedTeasCount = 0;
for (let i = 0; i < allteas.length; i++) {
  if (!nonCaffeinated.includes(allteas[i])) {
    caffeinatedTeasCount++;
  }
}
// console.log(caffeinatedTeasCount, ">>>caffeinatedTeasCount");

// Problem: Use a for loop to create a new array with all teas name in uppercase.
// === method-1 ===//
let allTeasInUpperCase1 = [];
for (let i = 0; i < allteas.length; i++) {
  allTeasInUpperCase1.push(allteas[i].toUpperCase());
}
// console.log(allTeasInUpperCase1, ">>>allTeasInUpperCase");

// == Method-2 ==//
let allTeasInUpperCase2 = allteas.map((tea) => tea.toUpperCase());
// console.log(allTeasInUpperCase2, ">>>allTeasInUpperCase2");

// Problem: Use a for loop to find the tea name with most characters.
// == method-1 ==//
let allTeasCopy = [...allteas, "Kalapaniii Tea"];

let teaWithMostCharacters = [allTeasCopy[0]];
for (let i = 1; i < allTeasCopy.length; i++) {
  if (allTeasCopy[i].length > teaWithMostCharacters[0].length) {
    teaWithMostCharacters.splice(0);
    teaWithMostCharacters.push(allTeasCopy[i]);
  } else if (allTeasCopy[i].length == teaWithMostCharacters[0].length) {
    teaWithMostCharacters.push(allTeasCopy[i]);
  }
}
// console.log(teaWithMostCharacters, ">>>>teaWithMostCharacters");

// Problem: Use a for loop to reverse the order of teas in the array.

//== Method-1 ==//
let reversedAllTeas1 = [];
for (let i = allteas.length - 1; i >= 0; i--) {
  reversedAllTeas1.push(allteas[i]);
}
// console.log(reversedAllTeas1, ">>>reversedAllTeas1");

//== Method-2 ==//
let reversedAllTeas2 = [];
for (let i = 0; i < allteas.length; i++) {
  reversedAllTeas2.unshift(allteas[i]);
}
// console.log(reversedAllTeas2, ">>reversedAllTeas2");

// == Method-3 ==//
let copyAllTeas = [...allteas];
let reversedAllTeas3 = copyAllTeas.reverse(); // reverse method mutates the original array
// console.log(reversedAllTeas3, ">>reversedAllTeas3");

// ================================//
//==== Hitesh Sir's SOLUTIONs ======//
// ================================//

// Problem: Create an Array containing different types of Teas
const teas = [
  "Green Tea",
  "Black Tea",
  "Oolong Tea",
  "White Tea",
  "Herbal Tea",
];
console.log(teas);

// Problem: Add "Chamomile Tea" to the existing list of teas
teas.push("Chamomile Tea");

// Problem: Remove "Oolong Tea" from the list of teas
const index = teas.indexOf("Oolong Tea"); // -1 or 0
if (index > -1) {
  teas.splice(index, 1); // mutates original array
}

// Problem: Filter the list to only include teas that are caffeinated.
let onlyCaffeinated = teas.filter((tea) => tea !== "Herbal Tea");

// Problem: Sort the list of teas in alphabetical order.
let sortedTeas = teas.sort();

// Problem: Use a for loop to print each type of tea in the array.
for (let i = 0; i < teas.length; i++) {
  console.log(teas[i]);
}

// Problem: Use a for loop to count how many teas are caffeinated (excluding "Herbal Tea")
let caffeinatedMyTeas = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffeinatedMyTeas++;
  }
}
// console.log(caffeinatedMyTeas);

// Problem: Use a for loop to create a new array with all teas name in uppercase.
const upperCaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  upperCaseTeas.push(teas[i].toUpperCase());
}
// console.log(upperCaseTeas, ">>upperCaseTeas");

// Problem: Use a for loop to find the tea name with most characters.
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (longestTea.length < teas[i].length) {
    longestTea = teas[i];
  }
}
// console.log(longestTea, ">>longestTea");

// Problem: Use a for loop to reverse the order of teas in the array.
console.log(teas, ">>>teas");

let reversedTeas = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reversedTeas.push(teas[i]);
}
console.log(reversedTeas, ">>>>reversedTeas");
