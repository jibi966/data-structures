function sameText(s1, s2, i, j, memo = {}) {
  const key = i + "," + j;
  if (key in memo) {
    return memo[key];
  }
  if (i === s1.length || j === s2.length) {
    return 0;
  }
  if (s1[i] === s2[j]) {
    memo[key] = 1 + sameText(s1, s2, i + 1, j + 1, memo);
    return memo[key];
  }
  memo[key] = Math.max(
    sameText(s1, s2, i, j + 1, memo),
    sameText(s1, s2, i + 1, j, memo)
  );
  return memo[key];
}

console.log(
  sameText(
    "pqvowlgjkyaoprgpfyaoeyoacxmmtggwbkmsvwlfupbaajnrhhdugvobkfeihdeghcldtfidpdikrbngkmfskxvtornqkucgxead",
    "kdwtorkaginuadulagbbjjibeohsqzcbktohkmxqnaezrmcvcoznbxckdzaxnbajdsqhgqfdpokhnhhyhtomgyimadxxeckhqlya",
    0,
    0
  )
);
