// You are given an array A with N elements. You are allowed to remove only one element,
// which makes thesum of all the remaining elements exactly divisible by 7.

// Your task is to find the first index of smallest element that can be removed from array.
// If there is no answer print-1.

const arr = [14, 7, 8, 2, 4];
console.log(basicMaths(arr));

function basicMaths(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  let index = -1;
  let result = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let remaining_sum = sum - arr[i];
    if (remaining_sum % 7 === 0 && arr[i] < result) {
      result = arr[i];
      index = i;
    }
  }
  return index;
}
