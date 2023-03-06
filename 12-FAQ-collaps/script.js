const toggles = document.querySelectorAll(".faq-toggle");

// toggles.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     toggle.parentNode.classList.toggle("active");
//   });
// });

function activeClassToggle() {
  this.parentNode.classList.toggle("active");
}

toggles.forEach((toggle) => {
  toggle.addEventListener("click", activeClassToggle);
});

//THIS  WILL NOT WORK AS EXPECTED. HERE WE ARE GIVING RGUMENT AS PARAMETER
// function activeClassToggle(chield) {
//   chield.parentNode.classList.toggle("active");
// }

// toggles.forEach((toggle) => {
//   toggle.addEventListener("click", activeClassToggle(toggle));
// });
