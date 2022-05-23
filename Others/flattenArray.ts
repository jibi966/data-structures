// @ts-nocheck
const arr = [1, [2, 3], [3], [[[5]], 6]];

console.log(flatten(arr));
function flatten(arr) {
  return arr.reduce((ac, cu) => {
    if (Array.isArray(cu)) {
      return ac.concat(flatten(cu));
    }
    return ac.concat(cu);
  }, []);
}
