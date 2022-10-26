const panels = document.querySelectorAll(".panel");
console.log(panels);

panels.forEach((panel) => {
  //   console.log(panel);
  panel.addEventListener("click", () => {
    // console.log(panel);
    removeActivePannel();
    panel.classList.add("active");
  });
});

function removeActivePannel() {
  panels.forEach((panel) => panel.classList.remove("active"));
}
