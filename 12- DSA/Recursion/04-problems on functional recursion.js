/**
 * PROBLEMS ON RECURSION
 * 01- Reverse an array
 * 02- Check if string is palindrome
 */

//========= 01- reverse an array ========//
// sol-1 (two pointer)
let arr = [1, 2, 3, 4, 5];

/*
function reverseAnArray(l, r) {
  if (l >= r) {
    return;
  }

  [arr[l], arr[r]] = [arr[r], arr[l]];
  reverseAnArray(l + 1, r - 1);
}

reverseAnArray(0, arr.length - 1);
console.log(arr);
*/

// sol-2 (one pointer)
function reverseArr(i) {
  if (i >= arr.length / 2) {
    return;
  }

  [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
  return reverseArr(i + 1);
}

// reverseArr(0);
// console.log(arr);

//======= 02- check palindrome =======//
// sol-1 (two pointer)
let str = "madam";

function checkPalindrome(l, r) {
  if (str[l] !== str[r]) {
    return false;
  }

  if (l >= r) {
    return true;
  }

  return checkPalindrome(l + 1, r - 1);
}
// console.log(checkPalindrome(0, str.length - 1));

// sol-2 (one pointer)
function checkPalindromeOne(i) {
  if (i >= str.length - 1 / 2) {
    return true;
  }
  if (str[i] !== str[str.length - 1 - i]) {
    return false;
  }

  return checkPalindromeOne(i + 1);
}
console.log(checkPalindromeOne(0));
