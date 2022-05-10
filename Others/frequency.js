const key = 22;
const arr = [2, 2, 2, 2, 2, 11, 15, 18, 20, 22];
console.log(main(arr, key));

function main(arr, key) {
  const ans1 = lowerBound(arr, key);
  const ans2 = upperBound(arr, key);
  if (ans1 == -1 || ans2 == -1) {
    return 0;
  }
  return ans2 - ans1 + 1;
}

function lowerBound(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let ans = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == k) {
      ans = mid;
      high = mid - 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function upperBound(arr, k) {
  let low = 0;
  let high = arr.length - 1;
  let ans = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == k) {
      low = mid + 1;
      ans = mid;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
