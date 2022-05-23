// @ts-nocheck
let arr = [10, 1, 10, 3, 4];
const queries = [
  [1, 10],
  [2, 9],
  [3, 4],
  [2, 2],
];

FindQuery(arr, queries);

function FindQuery(arr, queries) {
  arr = arr.sort((a, b) => a - b);
  for (let i = 0; i < queries.length; i++) {
    let minimum = findMin(arr, queries[i][0]);
    let maximum = findMax(arr, queries[i][1]);
    console.log(maximum - minimum + 1);
  }
}

function findMin(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] >= x) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}
function findMax(arr, x) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] <= x) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}
