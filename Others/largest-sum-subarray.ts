// @ts-nocheck
const arr = [2, -3, 4, -1, -2, 1, 5, -3];

function largeSumOfSubArrays(arr) {
  let max_sum = Number.MIN_VALUE;
  let tempSum = 0;
  for (let i = 0; i < arr.length; i++) {
    tempSum += arr[i];
    if (max_sum < tempSum) {
      max_sum = tempSum;
    }
    if (tempSum < 0) {
      tempSum = 0;
    }
  }
  return max_sum;
}

console.log(largeSumOfSubArrays(arr));
