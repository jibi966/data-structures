const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const k = 3;
subArray(arr, k);

function subArray(arr, k) {
  let cur_sum = 0;
  let max_sum = Number.MIN_VALUE;
  for (let i = 0; i < arr.length; i++) {
    cur_sum += arr[i];
    if (i >= k - 1) {
      max_sum = Math.max(max_sum, cur_sum);
      cur_sum -= arr[i - (k - 1)];
    }
  }
  return console.log(max_sum);
}
