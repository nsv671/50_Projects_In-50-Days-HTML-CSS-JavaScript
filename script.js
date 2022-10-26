const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActiveProgress = 1;
console.log(circles);

next.addEventListener("click", () => {
  currentActiveProgress++;

  if (currentActiveProgress > circles.length)
    currentActiveProgress = circles.length;
  console.log(currentActiveProgress);

  update();
});

prev.addEventListener("click", () => {
  currentActiveProgress--;

  if (currentActiveProgress < 1) currentActiveProgress = 1;
  console.log(currentActiveProgress);

  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActiveProgress) {
      circle.classList.add("active");
      progress.style.width = (index / (circles.length - 1)) * 100 + "%";
    } else {
      circle.classList.remove("active");
    }

    if (currentActiveProgress === 1) prev.disabled = true;
    else if (currentActiveProgress === circles.length) {
      next.disabled = true;
    } else {
      prev.disabled = false;
      next.disabled = false;
    }
  });
}
