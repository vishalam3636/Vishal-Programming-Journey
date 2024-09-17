function calculateSum(a, b) {
  const result = a + b;

  console.log(result);
}

let x = 50;

console.log(module.exports, ">>> module.exports value");

//******************************
// // if exporting (one item)
// module.exports = calculateSum;
//******************************

//******************************
// // if exporting (multiple items)
// module.exports = {
//   x: x,
//   calculateSum: calculateSum,
// }; // in case of common js

// or

module.exports = { x, calculateSum }; // in case of common js
//******************************

// export default calculateSum; // in case of mjs i.e; module js
