// when we accidentally click more than one our submit button to payment for our cart product or anything else. if we do not debounce (stop bounce) then our payment request will accept more than one in the backend and payment will be more than one. that's why to stop this bounce we have to make debounce. it is use not only on button, it can use more specific place like search input or text input.

const button = document.getElementById("debounce");

function debounce(fn, delay) {
  let timeoutId; // closure

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn();
    }, delay);
  };
}

button.addEventListener(
  "click",
  debounce(function () {
    console.log("clicked"); // now we can click one time on the button
  }, 500)
);
