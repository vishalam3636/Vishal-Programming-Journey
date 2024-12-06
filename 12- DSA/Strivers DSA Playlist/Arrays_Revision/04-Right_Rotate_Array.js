// var nums = [1, 2, 3, 4, 5, 6, 7];
// var k = 3;
// Output: [5, 6, 7, 1, 2, 3, 4];

var nums = [-1, -100, 3, 99];
var k = 2;
// Output: [3, 99, -1, -100];

function RightRotateArray(nums, k) {
  k = k % nums.length;

  let temp = nums.slice(nums.length - k);

  for (let i = nums.length - (k + 1); i >= 0; i--) {
    nums[i + k] = nums[i];
  }

  for (let i = 0; i < temp.length; i++) {
    nums[i] = temp[i];
  }

  console.log(nums);
}
RightRotateArray(nums, k);
