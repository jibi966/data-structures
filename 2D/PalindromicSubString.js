// Write a program that returns length of the longest palindromic substring of that string.

const str = "thisracecarisgood";
console.log(longestPalindromicSubstring(str));

function longestPalindromicSubstring(str) {
  let length = 1;
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      // Checking for palindrom
      let flag = false;
      for (let k = 0; k < (j - i + 1) / 2; k++) {
        if (str[i + k] !== str[j - k]) {
          flag = true;
        }
      }
      // if palindrom
      if (!flag && j - i + 1 > length) {
        start = i;
        length = j - i + 1;
      }
    }
  }
  return length;
  // if asked for palindromic string

  //   let bag = "";
  //   for (i = start; i < start + length; i++) {
  //     bag += str[i];
  //   }
  //   return bag;
}
