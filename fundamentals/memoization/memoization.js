function add(x) {
  return 10 + x;
}

// add(10);
// add(10);

// ! if we call this add function with the same value and if this function will be a more complex or expensive it will be create a performance issue. which is not the best practices indeed. To solve this issue, we can create a new function which will be higher order function and with closure in it. We will turn the add function through the higher order function and will check the previous value still cache to higher order function if cache then return the result don't need to calculate the result if not then calculate the result and save the result as a cache. so that, don't need to call add function twice.

// higher order function
function memo(func) {
  // create a closure to remember the calculate results
  let cache = {};
  return function (x) {
    console.log(cache);

    if (cache[x]) {
      // cache[x] - object's key.
      console.log("result from cache");
      return cache[x]; // that means the result is stored from before calling the function
    } else {
      console.log("calculating result");
      const result = func(x); // func(x) - add(x) which will be calculate the result. if the result is not stored in cache.
      cache[x] = result; // and store the result in  the cache. so that, the function does not calculate twice.
      return result;
    }
  };
}

const calculate = memo(add); // memo(add) - return function
// console.log(calculate(10));
// console.log(calculate(10));

// TODO: if the value is more than one then we will use spread operator.
function add(...x) {
  // ...x will be an array of values. we have to use reduce method.
  //   console.log(x);
  return x.reduce((sum, currValue) => sum + currValue);
}
// add(10, 20, 30, 40);

// higher order function
function memo(func) {
  let cache = {};
  return function (...x) {
    // console.log(cache);
    const key = JSON.stringify(x);

    if (cache[key]) {
      console.log("result from cache");
      return cache[key];
    } else {
      console.log("calculating result");
      const result = func(...x);
      cache[key] = result;
      return result;
    }
  };
}

const calculate2 = memo(add);
console.log(calculate2(10, 20, 30, 40));
console.log(calculate2(10, 20, 30, 40));
