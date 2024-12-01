// var nums = [1, 2, 3, 4, 5, 6, 7];
// var k = 3;

var nums = [-1, -100, 3, 99];
var k = 2;

// Sol-1
function leftRotateArray(nums, k) {
  k = k % nums.length;

  let temp = nums.slice(0, k);
  //   console.log(temp, ">>temp");

  for (let i = k; i < nums.length; i++) {
    nums[i - k] = nums[i];
  }

  for (let i = nums.length - k; i < nums.length; i++) {
    nums[i] = temp[i - (nums.length - k)];
  }

  console.log(nums);
}
// leftRotateArray(nums, k);
