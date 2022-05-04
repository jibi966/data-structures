let map = new Map();

let numbers = [
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 4],
  [3, 5],
  [4, 5],
];

for (num of numbers) {
  map.set(num[0], []);
}

for (num of numbers) {
  let ar = map.get(num[0]);
  if (ar) {
    ar.push(num[1]);
  } else {
    map.set(num[0], num[1]);
  }
}

// let ar = map.get(1);
// ar.push(4);
console.log(map);
