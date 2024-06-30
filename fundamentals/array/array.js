// ? Array methods:
const arr1 = ["cars", "bikes", "motors", "volvo"];
// arr1.sort();
// console.log(arr1);
// sort() method is alter the main array
arr1.toSorted();
console.log(arr1);

// TODO: Nested Loop
const num1 = [2, 4, 5, 8, 10, 12];
const num2 = [20, 10, 30, 40, 50];
const num3 = [200, 100, 300, 400, 500];

const num1Len = num1.length;
const num2Len = num2.length;
const num3Len = num3.length;

for (let i = 0; i <= num1Len; i++) {
  console.log("Number 1: " + num1[i]);
  for (let j = 0; j <= num2Len; j++) {
    console.log("Num 2: " + num2[j]);
    for (let k = 0; k <= num3Len; k++) {
      console.log(num3[k]);
    }
  }
}
