// Given an array A having N positive integers. Find the nearest smaller number for every element such that the smaller element is on left side.

// Note - If any element doesn't have any smaller element that it to it's left, print -1 for it.

// input: N = 5
// input arr => 1 2 5 3 5
// output => -1 1 2 2 3
// @ts-nocheck
const arr = [1, 2, 5, 4, 5];
nearestSmallerElement(arr);

function nearestSmallerElement(arr) {
  const stack = [];
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      ans.push(-1);
    } else {
      ans.push(stack[stack.length - 1]);
    }

    stack.push(arr[i]);
  }
  return console.log(ans);
}
