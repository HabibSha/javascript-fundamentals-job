const sortBy = function (arr, fn) {
  const sortedArr = arr.sort((a, b) => fn(a) - fn(b));
  console.log(sortedArr);
};

fn = (x) => x;
sortBy([2, 3, 1, 7, 6], fn);
