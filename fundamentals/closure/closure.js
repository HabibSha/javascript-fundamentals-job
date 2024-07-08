// we can execute function in 3 different ways.
// This is the 1 way we can execute a function.
function outer() {
  function inner() {
    console.log("inner");
  }
  //   We executed the inner function inside the outer function
  inner();
}
outer();

function A() {
  function B() {
    function C() {
      function D() {
        function E() {
          function F() {
            console.log("I am the last child function F");
          }
          F();
        }
        E();
      }
      D();
    }
    C();
  }
  B();
}
A();

// This is the 2nd way we can execute the function. This way is the best practices
function outer2() {
  return function inner2() {
    console.log("I am inner2");
  };
}
// if we execute the outer2 function we will get the inner2 function's body in it.
const result = outer2();
// console.log(result);
// [Function: inner2]
// the result variable is a function because the inner2 function is inside the result. if we execute the result we will get "I am inner2".
result();

// And the last way we can execute the function by using IIFE(Immediately Invokable Function Execution)
(function outer3() {
  (function inner3() {
    console.log("I am IIFE called.");
  })();
})();

/**
 * Now closure: we can describe closure with our examples with above examples. when a child function like inner function can access everything on it's parent function like outer function not only access but also modify or change the values or variables of parent function but the parent function cannot access any of values and variables on it's child function. A child function can capture all the variables and values it's parent's function after parent function execute or dead, the child function capture it unless it's execute itself, it is called closure.
 */
// Example 1
function parent(x) {
  return function child(y) {
    if (x > 5) {
      console.log(y);
    } else {
      console.log("X is not grater than 5");
    }
  };
}

const result1 = parent(4);
result1(2);
// we can see the logic we have build. there are two functions one is parent and the other is child function inside the parent function who can access it's parent's values.

// Example 2
function parent1() {
  let parentMoney = 5000;
  return function child1(childMoney) {
    if (parentMoney > childMoney) {
      const total = parentMoney + childMoney;
      console.log("Parent give his all of money to his child ", total);
    } else {
      console.log("You have enough money. I can't give you any of my money.");
    }
  };
}

const result2 = parent1();
result2(5001);
// we can see inside the logic, the child function can access it's parent's values after execute the parent function and can change the values of parent function. it is called closure.
