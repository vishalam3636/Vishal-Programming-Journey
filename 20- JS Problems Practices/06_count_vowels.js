let str = "javascript";

let vowels = {
  a: true,
  e: true,
  i: true,
  o: true,
  u: true,
};

function countVowels(str) {
  let result = 0;
  let lowerCaseStr = str.toLowerCase();

  for (let elem of lowerCaseStr) {
    if (vowels[elem]) {
      result++;
    }
  }

  console.log(result);
}

countVowels(str);
