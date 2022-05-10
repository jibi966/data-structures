const str = "()(((((((((";
minPara(str);

function minPara(str) {
  let opening = 0;
  let closing = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ")") {
      closing += 1;
    } else {
      opening += 1;
    }
  }
  console.log(Math.abs(closing - opening));
}
