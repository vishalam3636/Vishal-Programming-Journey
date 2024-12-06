/**
 *
 * URL-https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/
 *
 *
 * Input: nums = [3,4,5,1,2]
 * Output: true
 *
 * Input: nums = [2,1,3,4]
 * Output: false
 *
 * Input: nums = [1,2,3]
 * Output: true
 *
 */

var nums = [3, 4, 5, 1, 2];
// var nums = [2, 1, 3, 4];
// var nums = [1, 2, 3];

// Sol-1: (Will only work for linear sorted and will not work for rotated sorted)
function checkSortedRotatedArrBrute(nums) {
  let isSorted = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      isSorted = false;
      break;
    }
  }

  console.log(isSorted);
}
// checkSortedRotatedArrBrute(nums);

// SOl-2: (Optomized solution)
var nums = [3, 4, 5, 1, 2];

function checkRotatedSorted(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[(i + 1) % nums.length]) {
      count = count + 1;
    }
  }

  return count > 1 ? false : true;
}
// console.log(checkRotatedSorted(nums));

// Sol-3: (based on the same idea as above)
var nums = [3, 4, 5, 1, 2]; // true
var nums = [7, 2, 3, 4, 5, 8]; // false

function checkRotatedSortedOptimized(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    console.log(i, ">>>>i ");

    if (nums[i] > nums[i + 1]) {
      // console.log(`First if block>>> ${nums[i]} > ${nums[i + 1]}`);
      count++;
    }

    if (i == nums.length - 1 && nums[i] > nums[0]) {
      // console.log(`Second if block>>> ${nums[i]} > ${nums[i + 1]}`);
      count++;
    }
  }

  console.log(count);
  count <= 1 ? console.log(true) : console.log(false);
}
checkRotatedSortedOptimized(nums);
