// Check For Anagram

//=====================================//
//============== solution-01 ==========//
//=====================================//
/*
let str1 = "anagram";
let str2 = "anagram";

function isAnagram1(str1, str2) {
  if (str1.length !== str2.length) return false;

  const sortedStr1 = str1.split("").sort().join("");
  const sortedAtr2 = str2.split("").sort().join("");

  if (sortedStr1 === sortedAtr2) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram1(str1, str2));
*/

//=====================================//
//============== solution-02 ==========//
//=====================================//
/*
let str1 = "anagram";
let str2 = "anagraa";

function isAnagram2(str1, str2) {
  let obj = {};

  for (let letter of str1) {
    if (!obj[letter]) {
      obj[letter] = 1;
    } else if (obj[letter]) {
      obj[letter] = obj[letter] + 1;
    }
  }

  for (let letter of str2) {
    if (!obj[letter] || obj[letter] === 0) {
      console.log(
        obj,
        "obj when the letter value goes to zero or the letter dont exist in str1"
      );
      return false;
    } else if (obj[letter]) {
      obj[letter] = obj[letter] - 1;
    }
  }
  console.log(obj, "after");
  return true;
}

console.log(isAnagram2(str1, str2));
*/
