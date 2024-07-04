function showMyName(getFullName) {
  console.log(
    "We store a function as a parameter. We can call this function or not"
  );
  getFullName();
}

const getFullName = function () {
  console.log("John Doe");
};

showMyName(getFullName);
