document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".dropdown");
  const dropdownButton = dropdown.querySelector(".dropdown-button");
  const dropdownItems = dropdown.querySelectorAll(".dropdown-item");

  dropdownButton.addEventListener("click", function () {
    dropdown.classList.toggle("open");
  });

  dropdownItems.forEach(function (item) {
    item.addEventListener("click", function () {
      dropdownItems.forEach(function (i) {
        // if any item selected before then remove the style when new selected item will be clicked
        i.classList.remove("selected");
      });
      // and add style on the new selected item
      item.classList.add("selected");
      // after words the button text will replace by the selected item text
      dropdownButton.textContent = item.textContent;
      dropdown.classList.remove("open");
    });
  });

  document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("open");
    }
  });
});
