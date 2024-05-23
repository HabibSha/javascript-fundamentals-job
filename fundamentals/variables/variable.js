let names = ["Abu Rayhan", "Simon Hossain", "Rehana Miti", "Leon Demario"];
let index = -1; // we can also write index = 0; that would 'abu rayhan'
let name = names[++index]; // we can write names[index] if we wrote index = 0
console.log(name);

setInterval(() => {
  name = names[index++];
  console.log(name, name.length);

  if (index === names.length) {
    index = 0;
  }
}, 1000);
