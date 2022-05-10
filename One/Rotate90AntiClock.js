const arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];
rotate90Degrees(arr);

function rotate90Degrees(arr) {
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    for (let j = i; j < n - 1 - i; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][n - 1 - i];
      arr[j][n - 1 - i] = arr[n - 1 - i][n - 1 - j];
      arr[n - 1 - i][n - 1 - j] = arr[n - 1 - j][i];
      arr[n - 1 - j][i] = temp;
    }
  }
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].join(" "));
  }
}
