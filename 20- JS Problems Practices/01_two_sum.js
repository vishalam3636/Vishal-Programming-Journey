const arr = [2, 7, 11, 15];
// const arr = [2, 11, 15];
const target = 9;

// Sol-1: Two Loops
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// console.log(twoSum(arr, target));

// Sol-2: Hash Map (for loop taking i)
function twoSumMap(arr, target) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[arr[i]] = i;
  }

  return [];
}

console.log(twoSumMap(arr, target));
