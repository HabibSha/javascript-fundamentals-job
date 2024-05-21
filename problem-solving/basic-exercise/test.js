// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Solution:
const today = new Date();

// Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
let day = today.getDay();

let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log("Today is : " + dayList[day] + ".");

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();

// Determine if it's AM or PM
let prepand = hour >= 12 ? "PM" : "AM";

// Convert 24-hour format to 12-hour format
hour = hour >= 12 ? hour - 12 : hour;

// Check for special cases when hour is 0 --optional
if (hour === 0 && prepand === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}

// Check for special cases when hour is 0 --optional
if (hour === 0 && prepand === "AM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = "AM";
  }
}

// console.log(hour);
// console.log(minute);
// console.log(second);
// console.log(prepand);
console.log(`Current time is : ${hour} ${prepand} : ${minute} : ${second}`);

// 2. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// Solution:
const date = new Date();

let dd = date.getDay();

// Get the month (adding 1 because months are zero-based)
let mm = date.getMonth() + 1;
const yyyy = date.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

console.log(mm + "-" + dd + "-" + yyyy);

// 3. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

// Solution with Heron's formula:
// s = a + b + c / 2 and A = sqrt s * (s - a)(s - b)(s - c)

let area1 = 5;
let area2 = 6;
let area3 = 7;

let s = (area1 + area2 + area3) / 2;

const area = Math.sqrt(s * ((s - area1) * (s - area2) * (s - area3)));
console.log(area);

// 4. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// Solution:
// Define a function to check if a given year is a leap year
function leapyear(year) {
  // Return true if the year is divisible by 4 but not divisible by 100 unless it's also divisible by 400
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

// 5. Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.

// Solution:
// Loop through the years from 2014 to 2050 (inclusive)
for (var year = 2014; year <= 2050; year++) {
  // Create a Date object for January 1st of the current year
  var d = new Date(year, 0, 1);

  // Check if January 1st is a Sunday (where Sunday corresponds to day index 0)
  if (d.getDay() === 0) {
    // Log a message if January 1st is a Sunday for the current year
    console.log("1st January is being a Sunday  " + year);
  }
}
