/**
 * PROBLEMS ON RECURSION
 * 01- Reverse an array
 * 02- Check if string is palindrome
 */

//========= 01- reverse an array ========//
// sol-1 (two pointer)
let arr = [1, 2, 3, 4, 5];

function reverseAnArray(l, r) {
  if (l >= r) {
    return;
  }

  [arr[l], arr[r]] = [arr[r], arr[l]];
  reverseAnArray(l + 1, r - 1);
}

reverseAnArray(0, arr.length - 1);
// console.log(arr);

// sol-1 (one pointer)
function reverseArr(i) {}

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

console.log(checkPalindrome(0, str.length - 1));
