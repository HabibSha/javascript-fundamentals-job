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
// const primeNum = function (N) {
//   if (N < 2 || N % 2 === 0) {
//     return false;
//   }

//   if (N === 2) {
//     return true;
//   }

//   for (i = 3; i * i <= N; i += 2) {
//     if (N % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(primeNum(4));

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
// const arrayA = [3, 4, 6, 7, 8, 11];
// const arrayB = [8, 9, 3, 10, 7, 1];

// function intersectionArr(arr1, arr2) {
//   return arr1.filter((value) => arr2.includes(value));
// }

// const result = intersectionArr(arrayA, arrayB);
// console.log(result);

// Remove duplicates from array
// we can use the Set() method to remove duplicate value because of Set() method remove duplicates value byDefault and return new array.
// const dupArr = [1, 4, 5, 4, 1, 4, 3, 6, 5];
// const removeDup = (arr = new Set(...dupArr, arr));
// console.log(removeDup);

// Create a custom map function with higher order function
// const countries = ["Lebanon", "Palestine", "Indonesia", "Bangladesh"];

// function customMapFunc(arr, fn) {
//   const newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArray.push(fn(arr[i]));
//   }
//   return newArray;
// }

// const fn = function (country) {
//   console.log(country);
//   console.log(country.length);
// };

// customMapFunc(countries, fn);

// Closure practice
// function parentFunc() {
//   const parentWealth = 50000;

//   return function () {
//     const childWealth = 59000;
//     if (parentWealth > childWealth) {
//       console.log("I am giving you all of my money");
//     } else {
//       console.log("You have enough money for living");
//     }
//   };
// }

// const childFunc = parentFunc();
// childFunc();

// Memoization practice
// function multiplyNumbers(num) {
//   return num * 10;
// }

// function memoFunc(func) {
//   let cache = {};

//   return function (x) {
//     console.log(cache);

//     if (cache[x]) {
//       console.log("Result from cache");
//       return cache[x];
//     } else {
//       console.log("Calculating the result");
//       const result = func(x);
//       cache[x] = result;
//       return result;
//     }
//   };
// }

// const calculate = memoFunc(multiplyNumbers);
// console.log(calculate(12));
// console.log(calculate(12));

// Memoization practice - 2 with spread operator. if user give more than one arguments.
function multiplyNumbers(...nums) {
  return nums.reduce((multiply, currValue) => multiply * currValue);
}

// console.log(multiplyNumbers(10, 20, 30));

// function memoFunc(func) {
//   let cache = {};

//   return function (...x) {
//     const key = JSON.stringify(x);
//     console.log(cache);

//     if (cache[key]) {
//       console.log("Result from cache");
//       return cache[key];
//     } else {
//       console.log("Calculating the result");
//       const result = func(...x);
//       cache[key] = result;
//       return result;
//     }
//   };
// }

// const calculate2 = memoFunc(multiplyNumbers);
// console.log(calculate2(5, 2, 6));
// console.log(calculate2(5, 2, 6));

// reverse string
// const strName = "Bangladesh";
// const divide = strName.split("");
// const result = divide.reverse();
// console.log(result.join(""));

//
// const strName = "Bangladesh";
// const divide = strName.split("");
// divide.map((alp) => console.log(alp));

// string rotation - (The result will more exact if we print it to the display. we can use dom).
let text = "Bangladesh";
setInterval(() => {
  text = text[text.length - 1] + text.substring(0, text.length - 1);
  console.log(text);
}, 100);
