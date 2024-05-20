// 1. Complementary DNA

// Explain: In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// Solution:
function dnaStrand(dna) {
  const complement = {
    A: "T",
    C: "G",
    T: "A",
    G: "C",
  };

  return dna
    .split("")
    .map((data) => complement[data])
    .join("");
}
dnaStrand("ATTGC");

// 2. Persistent Bugger.

// Explain: Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// Solution:
function persistence(num) {
  let count = 0;
  while (num >= 10) {
    (num = num
      .toString()
      .split("")
      .reduce((acc, digit) => acc * Number(digit))),
      1;
    count++;
  }
  return count;
}
persistence(77);

// ----Another way
function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((t, c) => c * t);
  }
  return i;
}

// --------Another way
function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((s, d) => s * d);
  }
  return i;
}
persistence(77);

// ------ another way
function persistence(num, cnt = 0) {
  let arrayNum = num.toString().split("");
  return arrayNum.length === 1
    ? cnt
    : persistence(
        arrayNum.reduce((x, y) => x * y),
        ++cnt
      );
}

// 3.Beginner Series #3 Sum of Numbers

//Explain:Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!
// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

//Your function should only return a number, not the explanation about how you get that number.

// Solution:
function getSum(a, b) {
  if (a === b) {
    return a;
  } else {
    return a + b;
  }
}
// console.log(getSum(2, 2));

// -----Another way
function getSum(a, b) {
  return a === b ? a : a + b;
}
// console.log(getSum(2, 5));

// =========== NO:3 not done yet ============

// NO:4 Disemvowel Trolls

// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// Solution:
function disemvowel(str) {
  const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return str
    .split("")
    .filter((char) => !vowel.includes(char))
    .join("");
}

disemvowel("is there any vowels inside this sentence?");

// Different way--
// 1--
function disemvowel2(str) {
  return str.replace(/[aeiou]/gi, "");
}
// 2--
const vowels = "aeiou";

function disemvowel3(str) {
  return str
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}
// 3--
const disemvowel4 = (str) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let newStr = "";
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i);
    if (vowels.indexOf(char) == -1) {
      newStr += char;
    }
  }
  return newStr;
};

// NO:5 Jaden Casing Strings
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:
// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// Solution:
String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
// console.log(capitalize("Here are some word sentence."));

// Different way ---
// 1--
String.prototype.toJadenCase = function () {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return this.split(" ").map(capitalizeFirstLetter).join(" ");
};

// 2--
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function (x) {
    return x.toUpperCase();
  });
};

//NO:6 Is a number prime?
// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

// Solution:
function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Different way 1---
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3 || n == 5 || n == 7 || n == 11) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (var i = 5; i <= Math.pow(n, 0.5); i += 6)
    if (n % i === 0 || n % (i + 2) === 0) return false;
  return true;
}

// 2 ---
function isPrime(num) {
  let even = 2;
  while (even * even <= num && num % even != 0) {
    even++;
  }
  return even * even > num && num > 1;
}

// 3----
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

// 4-----
const isPrime = (a, b = 2) => {
  while (b * b <= a) {
    if (a % b) ++b;
    else return !1;
  }
  return a > 1;
};

// NO:7 Human Readable Time
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)
// You can find some examples in the test fixtures.

// Solution:
function humanReadable(seconds) {
  // Calculate hours
  const hours = Math.floor(seconds / 3600);
  // Calculate minutes
  const minutes = Math.floor((seconds % 3600) / 60);
  // Calculate seconds
  const secs = (seconds % 3600) % 60;

  // Format hours, minutes, and seconds to be two digits
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(secs).padStart(2, "0");

  // Combine and return the formatted time string
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

// Different way ---1
function humanReadable(seconds) {
  var pad = function (x) {
    return x < 10 ? "0" + x : x;
  };
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ":" +
    pad(parseInt((seconds / 60) % 60)) +
    ":" +
    pad(seconds % 60)
  );
}

// Different way ---2
function humanReadable(seconds) {
  var hours = parseInt(seconds / 3600);
  var minutes = parseInt(seconds / 60) % 60;
  var seconds = seconds % 60;

  var pad = function (val) {
    return val < 10 ? "0" + val : val;
  };

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

// Different way ---3
function humanReadable(seconds) {
  return [seconds / 3600, (seconds % 3600) / 60, seconds % 60]
    .map(function (v) {
      v = Math.floor(v).toString();
      return v.length == 1 ? "0" + v : v;
    })
    .join(":");
}

// Different way ---4
function humanReadable(seconds) {
  return [(seconds / 3600) | 0, (seconds % 3600) / 60, (seconds % 3600) % 60]
    .map((n) => ("0" + (("" + n) | 0)).substr(-2))
    .join(":");
}
