// Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai).
// n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which,
// together with the x-axis forms a container, such that the container contains the most water.

// let obj1;
// obj1 = { name: "jibi" };
// const obj2 = { ...obj1 };
// obj2.name = "pana";
// console.log(obj1);
// console.log(obj2);
// @ts-nocheck
Array.prototype.pairs = function (func) {
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i; j < this.length - 1; j++) {
      func([this[i], this[j + 1]]);
    }
  }
};
let pairs = (arr) =>
  arr.map((v, i) => arr.slice(i + 1).map((w) => [v, w])).flat();
