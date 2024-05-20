// Built a map function by me
// map is a higher-order function

const countries = ["Bangladesh", "Indonesia", "Russia", "Somalia"];

// this is an higher-order function
function mapHabib(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    // sending single country as parameter in that fn function
    newArray.push(fn(arr[i]));
    // arr[i] will be specific Bangladesh Indonesia ...
  }
  return newArray;
}

const fn = function (country) {
  // that arr[i] from the for loop capture in the country parameter
  console.log(country);
  // log result = Bangladesh Indonesia ...
  return country.length;
};

const myArray = mapHabib(countries, fn);
console.log(myArray);

// solving it with built in map function;
const result = countries.map((country) => country.length);
console.log(result);

// NO 2
const players = [
  {
    name: "John",
    age: 23,
    score: 203,
  },
  {
    name: "Doe",
    age: 22,
    score: 206,
  },
  {
    name: "Jimmy",
    age: 23,
    score: 202,
  },
  {
    name: "Leon",
    age: 23,
    score: 205,
  },
  {
    name: "Leo",
    age: 22,
    score: 204,
  },
];

// now we will define which player has a grater than 204
const highestScore = players.filter((player) => player.score > 204);
console.log(highestScore);

// without filter function
let highest = [];
for (let i = 0; i < players.length; i++) {
  if (players[i].score > 204) {
    highest.push(players[i]);
  }
}
console.log(highest);
