const string = "abbaccd";

function foo(str) {
  if (str.length == 0) {
    return console.log("Empty String");
  }
  if (str.length == 1) {
    return str;
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      if (str[i] != str[i + 1]) {
        result += str[i];
      }
    }
    if (i == str.length - 1) {
      if (str[i] != str[i - 1]) {
        result += str[i];
      }
    } else {
      if (str[i] != str[i - 1] && str[i] != str[i + 1]) {
        result += str[i];
      }
    }
  }
  if (str.length == result.length) {
    return result;
  } else {
    return foo(result);
  }
}
console.log(foo(string));
