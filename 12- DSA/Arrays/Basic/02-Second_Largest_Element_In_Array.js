/**
 * LINK- https://www.geeksforgeeks.org/problems/second-largest3735/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=second-largest
 *
 *
 * Input: arr[] = [12, 35, 1, 10, 34, 1]
 * Output: 34
 *
 * Input: arr[] = [10, 5, 10]
 * Output: 5
 *
 * Input: arr[] = [10, 10, 10]
 * Output: -1
 *
 */

var arr = [12, 35, 1, 10, 34, 1];
// var arr = [10, 5, 10];
// var arr = [10, 10, 10];

// SOL-1: (This will fail if the second largest is same as largest or multiple repeating largest number)
function secondLargestBrute(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  console.log(sortedArr);

  let secondLargest = sortedArr[sortedArr.length - 2];

  console.log(secondLargest);
}
// secondLargestBrute(arr);

// SOL-2: (Iterating over sorted array, until get the differnt number than the largest)
function secondLargestModifiedBrute(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  let largest = sortedArr[sortedArr.length - 1];
  let secondLargest = largest;

  for (let i = sortedArr.length - 2; i >= 0; i--) {
    if (sortedArr[i] < largest) {
      secondLargest = sortedArr[i];
      break;
    }
  }

  console.log(secondLargest);
}
// secondLargestModifiedBrute(arr);

// Sol-3: (OPTIMAL)
function secondLargestOptimal(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  //   console.log(largest, secondLargest, ">>>largest and secondLargest");

  secondLargest == -Infinity || secondLargest == largest
    ? console.log(-1)
    : console.log(secondLargest);
}
secondLargestOptimal(arr);
