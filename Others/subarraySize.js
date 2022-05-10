const arr = [4, 2, 1, 7, 8, 1, 2, 8, 1, 0];
const target = 8;

console.log(subarraySize(arr, target));

function subarraySize(arr, target) {
  let start = 0;
  let cur_sum = 0;
  let size = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    cur_sum += arr[i];
    while (cur_sum >= target) {
      size = Math.min(size, i - start + 1);
      cur_sum -= arr[start];
      start++;
    }
  }
  return size;
}
