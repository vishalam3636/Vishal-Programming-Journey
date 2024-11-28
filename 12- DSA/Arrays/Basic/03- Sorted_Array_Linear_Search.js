/**
 * LINK- https://www.geeksforgeeks.org/problems/who-will-win-1587115621/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=who-will-win
 *
 * Input: arr[] = [1, 2, 3, 4, 6], k = 6
 * Output: true
 *
 * Input: arr[] = [1, 2, 4, 5, 6], k = 3
 * Output: false
 *
 * Input: arr[] = [2, 3, 5, 6], k = 1
 * Output: false
 *
 */

var arr = [1, 2, 3, 4, 6];
var k = 6;

// var arr = [1, 2, 4, 5, 6];
// var k = 3;

// var arr = [2, 3, 5, 6];
// var k = 1;

// SOl-1 (iterate over array and compare each elem)
function linearSearchBrute(arr, k) {
  let isExist = false;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      isExist = true;
      break;
    }
  }

  console.log(isExist);
}
// linearSearchBrute(arr, k);

// SOL-2 (OPTIMAL, BINARY SEARCH- can only be applied on sorted arr)
function linearSearchBinary(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  let mid;

  let exists = null;

  while (right >= left) {
    mid = Math.floor((left + right) / 2);

    if (arr[mid] == k) {
      exists = mid;
      break;
    }
    if (arr[mid] > k) {
      right = mid - 1;
    }

    if (arr[mid] < k) {
      left = mid + 1;
    }
  }

  exists !== null ? console.log(true, "on index-", exists) : false;
}
linearSearchBinary(arr, k);
