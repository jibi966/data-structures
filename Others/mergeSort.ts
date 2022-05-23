// @ts-nocheck
const arr = [7, 6, 5, 4, 3, 2, 1];
mergeSort(0, arr, arr.length - 1);
console.log(arr);

function mergeSort(start, arr, end) {
  if (start >= end) {
    return;
  }
  let mid = start + Math.floor((end - start) / 2);
  mergeSort(start, arr, mid);
  mergeSort(mid + 1, arr, end);
  sorting(arr, start, end, mid);
}

function sorting(arr, start, end, mid) {
  let arr1 = createArray(arr, start, mid);
  let arr2 = createArray(arr, mid + 1, end);
  let left = 0;
  let right = 0;
  let cur = start;
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] <= arr2[right]) {
      arr[cur] = arr1[left];
      left++;
    } else {
      arr[cur] = arr2[right];
      right++;
    }
    cur++;
  }
  while (left < arr1.length) {
    arr[cur] = arr1[left];
    cur++;
    left++;
  }
  while (right < arr2.length) {
    arr[cur] = arr2[right];
    cur++;
    right++;
  }
}

function createArray(arr, start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(arr[i]);
  }
  return array;
}
