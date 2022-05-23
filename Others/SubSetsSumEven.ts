// @ts-nocheck
const arr = [1, 2, 3, 4];
CheckSum(arr);

function CheckSum() {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let bag = [];
      for (let k = i; k < j; k++) {
        bag.push(arr[k]);
      }
      let sum = 0;
      for (let k = 0; k < bag.length; k++) {
        sum += bag[k];
      }
      if (sum % 2 === 0) {
        flag = true;
        console.log(true);
      }
    }
    if (flag) {
      break;
    }
  }
  if (!flag) {
    console.log(false);
  }
}
