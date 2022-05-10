function knapSack(profit, weight, capacity, idx, memo = {}) {
  const key = idx + "," + capacity;
  if (key in memo) return memo[key];
  if (idx == profit.length || capacity === 0) {
    return 0;
  }
  let inc = 0;
  let ex = 0;
  if (weight[idx] <= capacity) {
    inc = knapSack(profit, weight, capacity, idx + 1);
  }
  ex = profit[idx] + knapSack(profit, weight, capacity - weight[idx], idx + 1);

  memo[key] = Math.max(inc, ex);
  return memo[key];
}

let profit = [5, 20, 20, 10];
let weight = [7, 5, 6, 6];
let capacity = 12;
console.log(knapSack(profit, weight, capacity, 0));
