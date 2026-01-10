let arr = [3, 6, 8, 10, 4, 1, 5];

// Sol-1 (sort the array and last element will be the largest one, condition is: no dups element)
let sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr);
let largesstElem = sortedArr[sortedArr.length - 1];
// console.log(largesstElem, ">>>>largesstElem");

// Sol-2 (Using Math method)
let largestElem = Math.max(...arr);
// console.log(largestElem);

// Sol-3 (looping over array)
function findLargestElemFunc1(arr) {
  let result = arr[0];

  for (let elem of arr) {
    if (elem > result) {
      result = elem;
    }
  }

  return result;
}
// console.log(findLargestElemFunc1(arr));

// Sol-4
let largestElem2 = arr.reduce((res, curr) => {
  if (curr > res) {
    res = curr;
  }

  return res;
}, arr[0]);

// console.log(largestElem2);
