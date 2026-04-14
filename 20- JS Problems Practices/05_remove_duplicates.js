// Remove duplicates without changing order
let arr = [1, 2, 2, 3, 4, 4];

// Sol-1:
function removeDups(arr) {
  let result = [];
  let map = {};

  for (let elem of arr) {
    if (!map[elem]) {
      result.push(elem);
      map[elem] = 1;
    } else {
      map[elem] += 1;
    }
  }

  //   console.log(map);

  return result;
}

console.log(removeDups(arr));
