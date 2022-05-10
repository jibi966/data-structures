const direction = "RLRUD";
// RLRUD
// RRULDLDRLRDRUDRLULLUURURDDLLRLLURDDLDURDDLLRLRRURRLDDDRUURUDRDUUURURDDLUDLDDRRUUUUURRDDLL
checkDirection(direction) ? console.log("Yes") : console.log("No");

function checkDirection(direction) {
  const hash = {};
  for (let i = 0; i < direction.length; i++) {
    const element = direction[i];
    if (hash[element] === undefined) {
      hash[element] = 1;
    } else {
      hash[element] += 1;
    }
  }
  if (hash.R == hash.L && hash.D == hash.U) {
    return true;
  } else {
    return false;
  }
}
