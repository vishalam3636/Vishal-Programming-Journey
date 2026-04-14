let nums = [1, 2, 4, 5];

function findMissing(nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  let missings = [];

  for (let i = min; i <= max; i++) {
    if (!nums.includes(i)) {
      missings.push(i);
    }
  }

  console.log(missings);
}

findMissing(nums);

// Optimal:
function findMissing(nums) {
  let min = Math.min(...nums);
  let max = Math.max(...nums);

  let set = new Set(nums);
  let missings = [];

  for (let i = min; i <= max; i++) {
    if (!set.has(i)) {
      missings.push(i);
    }
  }

  return missings;
}

console.log(findMissing([1, 2, 4, 5]));
