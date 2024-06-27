// for...in loop is for iterate the objects, arrays and get indexes and keys. for example:
const object = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  nationality: "American",
};

for (let keys in object) {
  console.log(keys);
  // we will get all the keys of object
}

for (let keys in object) {
  console.log(object[keys]);
  // we will get all the values of object
}

const array = ["hello", 12, 24, "how", 40, 45];

for (let indexes in array) {
  console.log(indexes);
  // we will get all the indexes of array
}

// for...of loop is for iterate the Set, Map, arrays and get values. for example:
for (let values of array) {
  console.log(values);
  // we will get all the values of object
}

// TODO: Examples
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
// To access arrays inside arrays, use a for-in loop for each array:
for (let i in myObj.cars) {
  console.log("Name: " + myObj.cars[i].name);
  for (let j in myObj.cars[i].models) {
    console.log("Models: " + myObj.cars[i].models[j]);
  }
}
