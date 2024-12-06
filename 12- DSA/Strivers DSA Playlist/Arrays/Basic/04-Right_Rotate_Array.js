/**
 * LINK- https://leetcode.com/problems/rotate-array/description/
 *
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 *
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 *
 */

var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;

// var nums = [-1, -100, 3, 99];
// var k = 2;

// Sol-1: (BRUTE FORCE)
function rightRotateArrayByKBrute(nums, k) {
  k = k % nums.length;

  let rightKElem = nums.slice(nums.length - k);

  for (let i = nums.length - 1 - k; i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  //   console.log(nums);
  //   console.log(rightKElem, ">>rightElem");

  for (let i = 0; i < rightKElem.length; i++) {
    nums[i] = rightKElem[i];
  }

  console.log(nums);
}
rightRotateArrayByKBrute(nums, k);
