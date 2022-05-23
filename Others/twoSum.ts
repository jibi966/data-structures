// @ts-nocheck
const arr = [2, 7, 11, 15];
const target = 9;

// console.log(twoSum(arr, target));
console.log(linearSolution(arr, target));
// Brute-Force => O(n^2)
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
}

// Linear solution => O(n)
function linearSolution(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const x = arr[i];
    if (map.has(target - x)) {
      return [map.get(target - x), i];
    }
    map.set(x, i);
  }
}
