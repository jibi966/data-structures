// const str = "xyzasisayzx";
// const ans1 = longestPalindromicSubstring(str);
// console.log("ans1:", ans1);

// function longestPalindromicSubstring(str) {
//   let arr = [];
//   let max_length = 1;
//   // for one numbers
//   for (let i = 0; i < str.length; i++) {
//     let simple = [];
//     for (let j = 0; j < str.length; j++) {
//       simple.push(true);
//     }
//     arr.push(simple);
//   }
//   // for two numbers
//   let start = 0;
//   for (let i = 0; i < str.length - 1; i++) {
//     if (str[i] == str[i + 1]) {
//       arr[i][i + 1] = true;
//       max_length = 2;
//       start = i;
//     }
//   }
//   for (let i = 3; i <= str.length; i++) {
//     for (let j = 0; j < str.length - i + 1; j++) {
//       let k = j + i - 1;
//       if (arr[j + 1][k - 1] && str[j] == str[k]) {
//         arr[j][k] = true;
//         if (i > max_length) {
//           max_length = i;
//           start = j;
//         }
//       }
//     }
//   }
//   let ans = "";
//   for (let i = start; i < start + max_length; i++) {
//     ans += str[i];
//   }
//   return ans;
// }
