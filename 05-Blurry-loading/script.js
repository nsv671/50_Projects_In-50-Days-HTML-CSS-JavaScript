const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

const temp = setInterval(bluring, 30);

function bluring() {
  load++;

  if (load > 99) clearInterval(temp);

  loadText.innerText = `${load}%`;

  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;

  loadText.style.opacity = scale(load, 0, 100, 1, 0);
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
