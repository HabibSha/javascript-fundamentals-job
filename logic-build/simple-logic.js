let counter = 0;
function increment() {
  counter += 1;
  return counter;
}

setInterval(() => {
  console.log(increment());
}, 100);
