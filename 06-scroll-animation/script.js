const boxes = document.querySelectorAll(".box");
const trigger = (window.innerHeight / 6) * 4;

window.addEventListener("scroll", scrollAnimation);

scrollAnimation();

function scrollAnimation() {
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigger) box.classList.add("show");
    else box.classList.remove("show");
  });
}
