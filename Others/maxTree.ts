// @ts-nocheck
function listing(arr, cur) {
  if (cur === 0) {
    return 1;
  }
  let ans = 1;
  for (let i = cur - 1; i >= 0; i--) {
    if (arr[i] < arr[cur]) {
      ans = Math.max(ans, 1 + listing(arr, i));
    }
  }
  return ans;
}

function tree(arr) {
  let max_ans = 1;
  for (let i = 0; i < arr.length; i++) {
    max_ans = Math.max(max_ans, listing(arr, i));
  }
  return max_ans;
}

console.log(tree([10, 22, 9, 33, 21, 50, 41, 60, 80]));
