let arr = [3, 6, 8, 10, 4, 3, 1, 5];

// Sol-1 (Using Math method)
let largestElem = Math.max(...arr);
// console.log(largestElem);

// Sol-2 (looping over array)
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

// Sol-3
let largestElem2 = arr.reduce((res, curr) => {
  if (curr > res) {
    res = curr;
  }

  return res;
}, arr[0]);

// console.log(largestElem2);
