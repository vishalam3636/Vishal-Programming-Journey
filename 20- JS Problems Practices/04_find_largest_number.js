let nums = [1, 5, 3, 9, 2];

function findLargest(nums) {
  let largest = nums[0];

  for (let elem of nums) {
    if (elem > largest) {
      largest = elem;
    }
  }

  console.log(largest);
}

findLargest(nums);

// sol-2: using reduce
let result = nums.reduce((largest, curr) => {
  if (curr > largest) {
    return curr;
  }
  return largest;
}, nums[0]);

console.log(result);
