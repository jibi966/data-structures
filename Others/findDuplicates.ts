// Given an array A of N elements that contains elements from 1 to N-1.
// All elements occur once except one which occurs twice. Find the repeating element.
// @ts-nocheck
const N = 7;
const arr = [1, 3, 2, 4, 5, 6, 6];

console.log(findDuplicates(arr, N));

function findDuplicates(arr, n) {
  let sum1 = 0;
  for (let num of arr) {
    sum1 += num;
  }
  let sum2 = findNaturalSum(n - 1);

  return sum1 - sum2;
}

function findNaturalSum(n) {
  let ans = n * (n + 1);
  return Math.floor(ans / 2);
}

// run Time => O(n)
