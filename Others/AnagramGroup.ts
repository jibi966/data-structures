// @ts-nocheck
const strings = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output => [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupedAnagram(strings));

function groupedAnagram(strings) {
  let hash = {};
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    const str = strings[i];
    const key = [...str].sort();
    if (hash[key]) {
      hash[key].push(str);
    } else {
      hash[key] = [str];
    }
  }
  for (let i in hash) {
    result.push(hash[i]);
  }
  return result;
}

// this is used for printing in lines

// const strings = ["eodc", "odec", "code", "baca", "aabc"];
// const hash = {};
// for (let i = 0; i < strings.length; i++) {
//   const str = strings[i];
//   const key = [...strings[i]].sort();
//   if (hash[key]) {
//     hash[key].push(str);
//   } else {
//     hash[key] = [str];
//   }
// }
// const result = [];
// for (let x in hash) {
//   result.push(hash[x][0]);
// }
// console.log("result:", result.sort());
