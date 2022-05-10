function robbery(arr, idx, memo = {}) {
  if (idx in memo) return memo[n];
  if (idx <= 0) {
    return 0;
  }
  memo[n] = Math.max(
    robbery(arr, idx - 1, memo),
    arr[idx - 1] + robbery(arr, idx - 2, memo)
  );
  return memo[n];
}

let n = 4;
let arr = [100, 1, 1, 100];

console.log(robbery(arr, n));
