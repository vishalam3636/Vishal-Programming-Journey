/**
 *
 * Didnt find the question in Leet code
 * Self taken question by idea of right rotate array
 *
 *
 * var nums = [1, 2, 3, 4, 5, 6, 7];
 * var k = 3;
 *
 * var nums = [-1, -100, 3, 99];
 * var k = 2;
 */

var nums = [1, 2, 3, 4, 5, 6, 7];
var k = 3;

// var nums = [-1, -100, 3, 99];
// var k = 2;

// Sol-1 (Brute Force)
function leftRotateArrayByKBrute(nums, k) {
  k = k % nums.length;
  let leftKElem = nums.slice(0, k);

  for (let i = k; i < nums.length; i++) {
    nums[i - k] = nums[i];
  }

  for (let i = nums.length - k; i < nums.length; i++) {
    nums[i] = leftKElem[i - (nums.length - k)];
  }

  console.log(nums, ">>>nums");
}
// leftRotateArrayByKBrute(nums, k);

function leftRotateArrayByKOptimal(nums, k) {
  console.log(nums.splice(0, k).reverse());
  console.log(nums);
}

leftRotateArrayByKOptimal(nums, k);
