// Given a array of N 32 bit integers. You need to find product of array for each i
// without considering ith element. where 0 <= i <= n-1.
// You are not allowed to use division operator. It is given that product will fit in 32 bit integer.

// n=> 5
// arr=> 1 2 3 4 5
// ans=> 120 60 40 30 24

// n=> 3
// arr=> 3 2 7
// ans=> 14 21 6

const n = 5;
const arr = [1, 2, 3, 4, 5];
console.log(productArray(arr, n));

function productArray(arr, n) {
  const left = [];
  const right = [];
  const total = [];

  left[0] = 1;
  right[n - 1] = 1;

  // For left side products
  for (let i = 1; i < n; i++) {
    left[i] = arr[i - 1] * left[i - 1];
  }
  // For right side products
  for (let i = n - 2; i >= 0; i--) {
    right[i] = arr[i + 1] * right[i + 1];
  }
  // For total products
  for (let i = 0; i < n; i++) {
    total[i] = left[i] * right[i];
  }
  return total;
}
