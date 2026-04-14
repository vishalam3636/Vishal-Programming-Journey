let str = "hello";

// Sol-1: reverse for loop
function revStr(str) {
  let res = "";

  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }

  return res;
}
// console.log(revStr(str));

// Sol2: JS method (split reverse and join)
let result = str.split("").reverse().join("");
console.log(result);
