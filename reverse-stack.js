const arr = [1, 2, 3, 4];
reverse();
function reverse() {
  if (arr.length > 0) {
    let x = arr.pop();
    reverse();
    insert(x);
  }
}

function insert(x) {
  if (arr.length == 0) {
    arr.push(x);
  } else {
    let a = arr.pop();
    insert(x);
    arr.push(a);
  }
}

console.log(arr);
