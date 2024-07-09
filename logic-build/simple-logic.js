// let counter = 0;
// function increment() {
//   counter += 1;
//   return counter;
// }

// setInterval(() => {
//   console.log(increment());
// }, 100);

// Prime Number
// Given a number N, verify if N is prime or not. Return true if N is prime, else return false.
// Solution:
const primeNum = function (N) {
  if (N < 2 || N % 2 === 0) {
    return false;
  }

  if (N === 2) {
    return true;
  }

  for (i = 3; i * i <= N; i += 2) {
    if (N % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(primeNum(4));

/**var isPrime = function(N) {
  // If N is less than 2, it's not prime
  if (N < 2) {
      return 0;
  }
  
  // If N is 2, it is prime
  if (N === 2) {
      return 1;
  }

  // If N is even and greater than 2, it's not prime
  if (N % 2 === 0) {
      return 0;
  }
  
  // Check for factors from 3 to the square root of N
  for (let i = 3; i * i <= N; i += 2) {
      if (N % i === 0) {
          return 0;
      }
  }
  
  // If no factors were found, N is prime
  return 1;
};*/

// Odd numbers
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// increment value and getValue
function createFunc() {
  let count = 0;

  const myObj = {
    increment: function () {
      return count++;
    },

    getValue: function () {
      return count;
    },
  };
  return myObj;
}

const calc = createFunc();
console.log(calc.getValue());
console.log(calc.increment());
console.log(calc.getValue());
console.log(calc.increment());
console.log(calc.getValue());
