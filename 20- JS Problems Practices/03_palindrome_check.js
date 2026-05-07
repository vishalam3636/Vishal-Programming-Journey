let str = "A man a plan a canal Panama";
// Output: true

// sol-1:
function isPalindrome(str) {
  let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

console.log(isPalindrome(str));

// sol-2:
function isPalindrome2(str) {
  let allSmall = str.toLowerCase();
  let removeSpace = "";

  for (let i = 0; i < allSmall.length; i++) {
    if (allSmall[i] !== " ") {
      removeSpace += allSmall[i];
    }
  }

  for (let i = 0; i < removeSpace.length / 2; i++) {
    if (removeSpace[i] !== removeSpace[removeSpace.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

isPalindrome2(str);

// Sol-3:
function isPalindromeOptimal(str) {
  let cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

isPalindromeOptimal(str);
