// string: xyzasisayzx
// Output: asisa
const str = "xyzasisayzx";

const ans1 = longestPalindromicSubstring(str);
console.log("ans1:", ans1);

const ans2 = bruteForce(str);
console.log("ans2:", ans2);

function longestPalindromicSubstring(str) {
  let dp = Array(str.length);
  for (let i = 0; i < str.length; i++) {
    dp[i] = Array(str.length);
  }

  // every single character is palindrom
  let max_length = 1;
  for (let i = 0; i < str.length; i++) {
    dp[i][i] = true;
  }

  // Checking for 2 characters
  let start = 0;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == str[i + 1]) {
      dp[i][i + 1] = true;
      start = i;
      max_length = 2;
    }
  }

  // for characters starting from index 3
  for (let k = 3; k <= str.length; k++) {
    for (let i = 0; i < str.length - k + 1; i++) {
      let j = i + k - 1;
      if (dp[i + 1][j - 1] && str[i] == str[j]) {
        dp[i][j] = true;
        if (k > max_length) {
          start = i;
          max_length = k;
        }
      }
    }
  }

  // Printing
  let bag = "";
  for (let i = start; i < start + max_length; i++) {
    bag += str[i];
  }
  return bag + "," + "Max Length" + "-" + max_length;
}

function bruteForce(str) {
  let max_length = 1;
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      // Checking palindrom
      let flag = 1;
      for (let k = 0; k < (j - i + 1) / 2; k++) {
        if (str[i + k] != str[j - k]) {
          flag = 0;
        }
      }
      // if palindrom
      if (flag == 1 && j - i + 1 > max_length) {
        start = i;
        max_length = j - i + 1;
      }
    }
  }
  let bag = "";
  for (let i = start; i < start + max_length; i++) {
    bag += str[i];
  }
  return bag + "," + "Max Length" + "-" + max_length;
}
