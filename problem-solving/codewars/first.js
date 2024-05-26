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

// NO:8 Take a Ten Minutes Walk

// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//some test cases for you...
// assert.isTrue(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
// assert.isFalse(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
// assert.isFalse(isValidWalk(['w']), 'should return false');
// assert.isFalse(isValidWalk(['n','n','n','s','n','s','n','s','n','s']), 'should return false');

// Solution:
function isValidWalk(walk) {
  if (walk.length !== 10) {
    return false;
  }

  let northSouth = 0;
  let eastWest = 0;

  for (const direction of walk) {
    if (direction === "n") {
      northSouth += 1;
    } else if (direction === "s") {
      northSouth -= 1;
    } else if (direction === "e") {
      eastWest += 1;
    } else if (direction === "w") {
      eastWest -= 1;
    }
  }

  return northSouth === 0 && eastWest === 0;
}

// Example Usage:
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"])); // true
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"])
); // false
console.log(isValidWalk(["n", "n", "n", "s", "s", "s", "e", "e", "w", "w"])); // true
console.log(isValidWalk(["n", "s", "e", "w", "n", "s", "e", "w", "n", "e"])); // false

// To determine whether a given walk is valid (i.e., it takes exactly 10 minutes and returns you to the starting point), you need to ensure two conditions are met:

// 1. The walk has exactly 10 directions.
// 2. The net effect of the walk is zero displacement in both the north-south and east-west directions.
// Here is the step-by-step implementation of the isValidWalk function:

// 1. Check the Length: First, ensure that the length of the walk is exactly 10. If not, immediately return false.
// 2. Calculate Displacement: Use counters to keep track of the net displacement in the north-south and east-west directions.

// Explanation:
// 1. Length Check: if (walk.length !== 10) { return false; }
// This ensures the walk takes exactly 10 minutes.

// 2. Counters Initialization:
// let northSouth = 0;
// let eastWest = 0;

// 3. Loop Through Directions:
// For each direction in the walk array:
// Increment or decrement the northSouth or eastWest counter accordingly.

// 4. Check Net Displacement:
// return northSouth === 0 && eastWest === 0;
// If both counters are zero, it means you have returned to the starting point.

// NO:9 - Delete occurrences of an element if it occurs more than n times

// Enough is enough!
// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been, and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions, since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily, Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// Solution:
// Object to keep track of the count of each element
let counts = {};
// Result array to store the final elements
let result = [];

// Iterate over each element in the input array
for (let i = 0; i < arr.length; i++) {
  let current = arr[i];
  // If the current element is not yet in the counts object, initialize it
  if (!counts[current]) {
    counts[current] = 0;
  }
  // If the count of the current element is less than n, add it to the result
  if (counts[current] < n) {
    result.push(current);
    counts[current]++; // Increment the count for this element
  }
}

return result; // Return the result array

// Different way --1
function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function (n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

// Different way --2
const deleteNth = (a, x) => {
  let m = {};
  return a.filter((v) => (m[v] = m[v] + 1 || 1) <= x);
};

// Different way --3
function deleteNth(arr, x) {
  var obj = {};
  return arr.filter(function (number) {
    obj[number] = obj[number] ? obj[number] + 1 : 1;
    return obj[number] <= x;
  });
}

// Different way --4
function deleteNth(arr, x) {
  return arr.reduce(function (a, v) {
    return count(a, v) < x ? a.concat(v) : a;
  }, []);
}

function count(arr, z) {
  return arr.filter(function (q) {
    return z == q;
  }).length;
}

// Different way --5
function deleteNth(arr, x) {
  var count = {};
  return arr.filter(function (a) {
    count[a] = ~~count[a] + 1;
    return count[a] <= x;
  });
}

// Different way --6
const deleteNth = (arr, x) =>
  arr.filter((e, i) => arr.slice(0, i).filter((f) => f == e).length < x);

// NO 10 First non-repeating character

// Write a function named first_non_repeating_letter† that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("");
// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

// Solution:
function firstNonRepeatingLetter(s) {
  // Create a dictionary to count occurrences of each character
  const charCount = {};

  // Convert the string to lowercase for case-insensitive comparison
  const lowerCaseString = s.toLowerCase();

  // Count occurrences of each character
  for (let char of lowerCaseString) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character in the original string that has a count of one
  for (let i = 0; i < s.length; i++) {
    if (charCount[lowerCaseString[i]] === 1) {
      return s[i];
    }
  }

  // If no non-repeating character is found, return an empty string
  return "";
}

// Example usage
console.log(firstNonRepeatingLetter("stress")); // 't'
console.log(firstNonRepeatingLetter("sTreSS")); // 'T'
console.log(firstNonRepeatingLetter("aabbcc")); // ''

// Differet way ---1
function firstNonRepeatingLetter(s) {
  for (var i in s) {
    if (s.match(new RegExp(s[i], "gi")).length === 1) {
      return s[i];
    }
  }
  return "";
}

// Differet way ---2
function firstNonRepeatingLetter(s) {
  var t = s.toLowerCase();
  for (var x = 0; x < t.length; x++)
    if (t.indexOf(t[x]) === t.lastIndexOf(t[x])) return s[x];
  return "";
}

// Differet way ---3
function firstNonRepeatingLetter(str) {
  return (
    str
      .split("")
      .find((e) => str.match(new RegExp(`${e}`, "gi")).length === 1) || ""
  );
}

// Differet way ---4
const firstNonRepeatingLetter = (s) =>
  s[
    [...s.toLowerCase()].findIndex(
      (c, _, s) => s.indexOf(c) === s.lastIndexOf(c)
    )
  ] || "";

// Differet way ---5
const firstNonRepeatingLetter = (s) =>
  [...s].find((ch) => s.match(new RegExp(ch, "gi")).length === 1) || "";

// Differet way ---6
const firstNonRepeatingLetter = (s) =>
  [...s].find((val) => !s.match(new RegExp(val, `gi`))[1]) || ``;

// NO 11 String incrementer

// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:
// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// Solution:
function incrementString(strng) {
  // Find the trailing number using regex
  const numberPattern = /(\d+)$/;
  const match = strng.match(numberPattern);

  if (match) {
    // Extract the number part and the rest of the string
    const numberStr = match[1];
    const prefix = strng.slice(0, -numberStr.length);

    // Increment the number, preserving leading zeros
    const incrementedNumber = (parseInt(numberStr, 10) + 1).toString();
    const paddedNumber =
      numberStr.slice(0, -incrementedNumber.length) + incrementedNumber;

    return prefix + paddedNumber;
  } else {
    // If no trailing number, just append '1'
    return strng + "1";
  }
}

// Example usage:
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar23")); // "foobar24"
console.log(incrementString("foo0042")); // "foo0043"
console.log(incrementString("foo9")); // "foo10"
console.log(incrementString("foo099")); // "foo100"
// Different way ---1
function incrementString(input) {
  if (isNaN(parseInt(input[input.length - 1]))) return input + "1";
  return input.replace(/(0*)([0-9]+$)/, function (match, p1, p2) {
    var up = parseInt(p2) + 1;
    return up.toString().length > p2.length ? p1.slice(0, -1) + up : p1 + up;
  });
}

// Different way ---2
let incrementString = (str) =>
  str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));

// Different way ---3
const incrementString = (s) => s.replace(/[0-8]?9*$/, (m) => String(++m));

// Different way ---4
function incrementString(input) {
  return input.replace(/([0-8]?)(9*)$/, function (s, d, ns) {
    return +d + 1 + ns.replace(/9/g, "0");
  });
}

// Different way ---5
function incrementString(str) {
  var c = str[str.length - 1];
  switch (c) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
      return str.substring(0, str.length - 1) + (parseInt(c) + 1);
    case "9":
      return incrementString(str.substring(0, str.length - 1)) + 0;
    default:
      return str + "1";
  }
}

// Different way ---6
function incrementString(strng) {
  return strng.replace(/[\d]*$/, (i) => String(+i + 1).padStart(i.length, 0));
}

// Different way ---7
const incrementString = (strng) => strng.replace(/[0-8]?9*$/, (val) => ++val);

// NO 11 Pyramid Slide Down

// Lyrics...
// Pyramids are amazing! Both in architectural and mathematical sense. If you have a computer, you can mess with pyramids even if you are not in Egypt at the time. For example, let's consider the following problem. Imagine that you have a pyramid built of numbers, like this one here:

// /3/
// \7\ 4
// 2 \4\ 6
//  8 5 \9\ 3

// Here comes the task...
// Let's say that the 'slide down' is the maximum sum of consecutive numbers from the top to the bottom of the pyramid. As you can see, the longest 'slide down' is 3 + 7 + 4 + 9 = 23

// Your task is to write a function that takes a pyramid representation as an argument and returns its largest 'slide down'. For example:

// * With the input `[[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]]`
// * Your function should return `23`.

// By the way...
// My tests include some extraordinarily high pyramids so as you can guess, brute-force method is a bad idea unless you have a few centuries to waste. You must come up with something more clever than that.

// Solution:
// Start from the second-to-last row and work upwards
for (let row = pyramid.length - 2; row >= 0; row--) {
  for (let col = 0; col < pyramid[row].length; col++) {
    // Calculate the maximum slide down sum for each element
    pyramid[row][col] += Math.max(
      pyramid[row + 1][col],
      pyramid[row + 1][col + 1]
    );
  }
}
// The top element will contain the maximum sum
return pyramid[0][0];

// Example usage
console.log(longestSlideDown([[3], [7, 4], [2, 4, 6], [8, 5, 9, 3]])); // Output: 23

// Explanation of the Code:
// Outer Loop (for (let row = pyramid.length - 2; row >= 0; row--)):

// This loop starts from the second-to-last row and moves upwards to the first row.
// Inner Loop (for (let col = 0; col < pyramid[row].length; col++)):

// For each element in the current row, it calculates the maximum slide down sum by considering the two elements directly below it in the next row.
// Update the Element (pyramid[row][col] += Math.max(pyramid[row + 1][col], pyramid[row + 1][col + 1])):

// This line updates the current element to be the sum of itself and the maximum of the two elements directly below it.
// Return the Result (return pyramid[0][0]):

// After processing all rows, the top element of the pyramid will contain the maximum sum of the slide down.
// This approach has a time complexity of O(n^2), where n is the number of rows in the pyramid, making it efficient and suitable for large pyramids.

// Different way ---1
function longestSlideDown(pyramid) {
  return pyramid.reduceRight((last, current) =>
    current.map((v, i) => v + Math.max(last[i], last[i + 1]))
  )[0];
}

// Different way ---2
function longestSlideDown(pyramid) {
  for (var i = pyramid.length - 2; i > -1; i--) {
    for (var j = 0; j < pyramid[i].length; j++) {
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
    }
  }
  return pyramid[0][0];
}

// Different way ---3
const longestSlideDown = (pyramid) =>
  pyramid.reduceRight((lower, current) =>
    current.map((v, i) =>
      lower[i] > lower[i + 1] ? v + lower[i] : v + lower[i + 1]
    )
  )[0];

// Different way ---4
function longestSlideDown(pyramid) {
  pyramid = pyramid.slice(0);
  let i = pyramid.length - 1;
  while (i--)
    for (let j = 0; j <= i; ++j)
      pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1]);
  return pyramid[0][0];
}

// Different way ---5
longestSlideDown = (pyramid) =>
  pyramid
    .reverse()
    .reduce((x, y) =>
      y.map((v, i) => (x[i] > x[i + 1] ? x[i] : x[i + 1]) + v)
    )[0];

// Different way ---6
const longestSlideDown = (pyramid) =>
  pyramid.reduceRight((pre, val) =>
    val.map((val, idx) => val + Math.max(...pre.slice(idx, idx + 2)))
  )[0];

// Different way ---7
const longestSlideDown = (pyr, { max } = Math) =>
  max(
    ...pyr.reduce((acc, row) =>
      row.map((num, idx) => num + max(acc[idx - 1] || 0, acc[idx] || 0))
    )
  );

// Different way ---8
function longestSlideDown(pyramid) {
  var res = pyramid.pop();
  while (pyramid.length > 0)
    res = pyramid.pop().map((x, i) => x + Math.max(res[i], res[i + 1]));
  return res[0];
}

// NO 12 Extract the domain name from a URL

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// Solution:
function domainName(url) {
  // Use a regular expression to match and extract the domain name
  const domain = url.match(/(?:https?:\/\/)?(?:www\.)?([^\/]+)/);
  // Extract the domain name part without subdomain or protocol
  return domain[1].split(".")[0];
}

// Example usages:
console.log(domainName("http://github.com/carbonfive/raygun")); // Output: "github"
console.log(domainName("http://www.zombie-bites.com")); // Output: "zombie-bites"
console.log(domainName("https://www.cnet.com")); // Output: "cnet"

// Explanation:
// 1. Regular Expression:

// (?:https?:\/\/)?: Non-capturing group to match the protocol (http:// or https://), if it exists.
// (?:www\.)?: Non-capturing group to match www. if it exists.
// ([^\/]+): Capturing group to match the domain name part until the first / or end of string.

// 2. Extracting the Domain Name:
// The domain name is extracted using the regular expression match. The result is an array where the first element is the full match and the second element is the captured domain name part.
// Split the captured domain name on . and take the first part to get the primary domain name.

// Different way ---1
function domainName(url) {
  url = url.replace("https://", "");
  url = url.replace("http://", "");
  url = url.replace("www.", "");
  return url.split(".")[0];
}

// Different way ---2
function domainName(url) {
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

// Different way ---3
function domainName(url) {
  return url.replace(/.+\/\/|www.|\..+/g, "");
}

// Different way ---4
function domainName(url) {
  return url.replace(/(https?:\/\/)?(www\.)?/, "").split(".")[0];
}

// Different way ---5
const domainName = (url) => url.replace(/.*\/\/|www.|\..*/g, ``);

// Different way ---6
function domainName(url) {
  url = url
    .toString()
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "");

  return url.split(".")[0];
}
