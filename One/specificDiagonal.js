const arr = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 9, 10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19, 20, 21],
  [22, 23, 24, 25, 26, 27, 28],
  [29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42],
  [43, 44, 45, 46, 47, 48, 49],
  [50, 51, 52, 53, 54, 55, 56],
  [57, 58, 59, 60, 61, 62, 63],
  [64, 65, 66, 67, 68, 69, 70],
];
const row = arr.length;
const col = arr[0].length;
const key = 5;

// 1=> 5 13 21
// 2=> 5 11 17 23 29

specificDiagonal(row, col, arr, key);

function specificDiagonal(row, col, arr, key) {
  let p = 0;
  let q = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arr[i][j] === key) {
        p = i;
        q = j;
      }
    }
  }
  let sum = p + q;
  let diff = q - p;
  let ans1 = "";
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (j + i == sum) {
        ans1 += arr[i][j] + " ";
      }
    }
  }
  console.log("ans1:", ans1);
  let ans2 = "";
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (j - i == diff) {
        ans2 += arr[i][j] + " ";
      }
    }
  }
  console.log("ans2:", ans2);
}
