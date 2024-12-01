// (SELF, starting mein galat kar ke baitha tha) sum of all elem in array
var arr = [1, 2, 3, 4, 5];

function sumArr(arr, i = 0, total = 0) {
  if (i > arr.length - 1) {
    return total;
  }

  if (i <= arr.length) {
    return sumArr(arr, i + 1, (total += arr[i]));
  }
}
// console.log(sumArr(arr));

//=================================================================//
//== STRIVERS INTRODUCTION RECURSION (understand Base condition) ==//
//=================================================================//
var count = 0;

function countNums() {
  //below if block has the base condition
  if (count == 4) {
    return;
  }

  console.log(count);
  count++;

  countNums();
}

countNums();
