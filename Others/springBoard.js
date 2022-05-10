const arr = [
  [3, 1, 7, 4, 2],
  [2, 1, 3, 1, 1],
  [1, 2, 2, 1, 8],
  [2, 2, 1, 5, 3],
  [2, 1, 4, 4, 4],
  [5, 2, 7, 5, 1],
];
var max_ans = -1;
for (let i = 0; i < arr[0].length; i++) {
  sub = recursive(arr, 0, i);
  max_ans = Math.max(max_ans, sub);
}
console.log(max_ans);

function recursive(arr, i, j, memo = {}) {
  const key = i + "," + j;
  if (key in memo) {
    return memo[key];
  }
  if (i >= arr.length || j >= arr[0].length || j < 0) {
    return 0;
  }
  memo[key] =
    arr[i][j] +
    Math.max(
      Math.max(
        recursive(arr, i + 1, j - 1, memo),
        recursive(arr, i + 1, j, memo)
      ),
      recursive(arr, i + 1, j + 1, memo)
    );
  return memo[key];
}
