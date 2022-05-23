// Given a string s, return true if it is a palindrome, or false otherwise.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true

// Input: s = "race a car"
// Output: false

// Input: s = " "
// Output: true

const str = " ";

console.log(validPalindrome(str));

function validPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, "");
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
