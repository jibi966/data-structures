function set() {
  const key = 29;
  const arr = [
    [10, 20, 30, 40],
    [15, 25, 35, 45],
    [27, 29, 37, 48],
    [32, 33, 39, 50],
  ];
  let i = 0;
  let j = arr[0].length - 1;
  while (i < arr.length && j >= 0) {
    if (arr[i][j] == key) {
      return console.log("found", key);
    } else if (arr[i][j] > key) {
      j--;
    } else {
      i++;
    }
  }
  return console.log("No");
}

set();
