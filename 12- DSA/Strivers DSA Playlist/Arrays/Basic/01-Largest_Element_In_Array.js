/**
 * LINK: https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=largest-element-in-array
 *
 * Input: arr = [1, 8, 7, 56, 90]
 * Output: 90
 *
 * Input: arr = [5, 5, 5, 5]
 * Output: 5
 *
 * Input: arr = [10]
 * Output: 10
 **/

var arr = [1, 8, 7, 56, 90];
// var arr = [5, 5, 5, 5];
// var arr = [10];

// SOL-1 (BRUTE FORCE)
function largestArrBrute(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let largest = sortedArr[sortedArr.length - 1];
  console.log(largest);
}
largestArrBrute(arr);

// SOl-2 (OPTIMAL)
function largestArr(arr) {
  let largest = -Infinity;

  for (let elem of arr) {
    if (elem > largest) {
      largest = elem;
    }
  }

  console.log(largest);
}

largestArr(arr);
