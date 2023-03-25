const btnChangeColog = document.querySelector(`.change-color`);
const spanClassColor = document.querySelector(`.color`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnChangeColog.addEventListener("click", () => {
  spanClassColor.innerHTML = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
