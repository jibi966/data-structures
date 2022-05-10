// You are given a number stored in a variable with the namenum

// Check if the number is a prime number or not

// If the value stored innum, is a prime number printYes, else printNo

// Note : A prime number is a number, that is divisible by only 1 and the number itself

const number = 13;
console.log(CheckPrime(number));

function CheckPrime(num) {
  let countOfDivision = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      countOfDivision++;
    }
  }
  return countOfDivision === 2 ? "Yes" : "No";
}
