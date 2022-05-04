const str1 = "cdab";
const str2 = "aced";

console.log(checkAnagram(str1, str2));

function checkAnagram(str1, str2) {
  let string1 = str1.split("");
  let string2 = str2.split("");

  string1 = string1.sort();
  string2 = string2.sort();

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      return false;
    }
  }
  return true;
}
