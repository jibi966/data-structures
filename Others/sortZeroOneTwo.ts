// @ts-nocheck
const arr = [0, 1, 2, 0, 1, 2];
// output 0 0 1 1 2 2

sortZeroOneTwo(arr);

function sortZeroOneTwo(array) {
  let zero_count = 0;
  let one_count = 0;
  let two_count = 0;

  for (let num of array) {
    if (num === 0) {
      zero_count++;
    } else if (num == 1) {
      one_count++;
    } else {
      two_count++;
    }
  }

  let idx = 0;
  while (idx < zero_count) {
    array[idx] = 0;
    idx++;
  }

  while (idx < one_count + zero_count) {
    array[idx] = 1;
    idx++;
  }
  while (idx < two_count + one_count + zero_count) {
    array[idx] = 2;
    idx++;
  }
  return console.log(array);
}
