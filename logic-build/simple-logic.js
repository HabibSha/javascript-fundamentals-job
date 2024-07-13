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
// function createFunc() {
//   let count = 0;

//   const myObj = {
//     increment: function () {
//       return count++;
//     },

//     getValue: function () {
//       return count;
//     },
//   };
//   return myObj;
// }

// const calc = createFunc();
// console.log(calc.getValue());
// console.log(calc.increment());
// console.log(calc.getValue());
// console.log(calc.increment());
// console.log(calc.getValue());

// greeting
// function greetFunc(name) {
//   return `Hello, ${name}`;
// }

// console.log(greetFunc("Alice"));

// we can replace string to another string by using replace() method.
const sentence =
  "React is a javascript Framework. React is a powerful Framework and most useful Framework.";

const correctionSentence = sentence.replace(/Framework/g, "Library");
// we use RexEx because of in the sentence the Framework is more than one. if we have one work of Framework then we don't need to use regex. We have more than one Framework word in the sentence that's why we use RegEx to replace all the word of Framework.
console.log(correctionSentence); // React is a javascript Library. React is a powerful Library and most useful Library.

// Intersection of arrays
const arrayA = [3, 4, 6, 7, 8, 11];
const arrayB = [8, 9, 3, 10, 7, 1];

function intersectionArr(arr1, arr2) {
  return arr1.filter((value) => arr2.includes(value));
}

const result = intersectionArr(arrayA, arrayB);
console.log(result);

// Remove duplicates from array
// we can use the Set() method to remove duplicate value because of Set() method remove duplicates value byDefault and return new array.
// const dupArr = [1, 4, 5, 4, 1, 4, 3, 6, 5];
// const removeDup = (arr = new Set(...dupArr, arr));
// console.log(removeDup);
