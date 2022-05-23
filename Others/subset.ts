// @ts-nocheck
function subSet(k, arr, index, sum) {
  if (index === arr.length) {
    if (sum === k) {
      return true;
    } else {
      return false;
    }
  }
  const f1 = subSet(k, arr, index + 1, sum + arr[index]);
  const f2 = subSet(k, arr, index + 1, sum);
  if (f1 || f2) {
    return true;
  }
  return false;
}
console.log(subSet(1, [9, 7, 2, 8, 6, 10], 0, 0));
