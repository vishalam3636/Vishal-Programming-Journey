// UNDERSTANDING PROTOTYPE

const testArr = [1, 2, 3];
// testArr.  // (testArr. krte hi array ke methods aane laghte hain)

const obj = {
  name: "Vishal",
  city: "Kanpur",
};
// obj. (. operator object ke properties ko access krne mein help krta hai)

let str = "Vishal";
// str.  // str. krte hi strings ke methods aane lagte hain

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
let arr = [1, 2, 3, 4, 5, 6];

// Array Length polyfills
Array.prototype.myLength = function () {
  let originalArr = this;

  let lengthArr = 0;
  for (let i = 0; i < originalArr.length; i++) {
    lengthArr++;
  }

  return lengthArr;
};

// let arrLen = arr.length;
// console.log(arrLen, ">>>myArrLen");

let myArrLen = arr.myLength();
console.log(myArrLen, ">>>myArrLen");

//============= FILTER polyfills ===========//
Array.prototype.myFilter = function (userFn) {
  let originalArr = this;
  let result = [];

  for (let i = 0; i < originalArr.length; i++) {
    let currVal = userFn(originalArr[i]);

    if (currVal) {
      result.push(originalArr[i]);
    }
  }

  return result;
};

// let filterData = arr.filter((item) => {
//   return item > 3;
// });
// console.log(filterData, ">>>filterData");

let myFilterData = arr.myFilter((item) => {
  return item > 3;
});
console.log(myFilterData, ">>>myFilterData");

// ======= MAP polyfills =========//
Array.prototype.myMap = function (userFun) {
  const originalArr = this;

  let updatedArr = [];
  for (let i = 0; i < originalArr.length; i++) {
    updatedArr.push(userFun(originalArr[i]));
  }

  return updatedArr;
};

// let mappedArr = arr.map((item) => {
//   return item * 5;
// });
// console.log(mappedArr, ">>>mappedArr");

let myMappedArr = arr.myMap((item) => {
  return item * 5;
});
console.log(myMappedArr, ">>>myMappedArr");

// ===== FOR EACH polyfills ======//
Array.prototype.myForEach = function (userFn) {
  const originalArr = this;

  for (let i = 0; i < originalArr.length; i++) {
    userFn(originalArr[i], i);
  }
};

arr.myForEach(function (value, index) {
  console.log(`The value at ${index} is ${index}`);
});
