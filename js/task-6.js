"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const input = controls.children[0];
const createButton = controls.children[1];
const destroyButton = controls.children[2];
const boxesContainer = document.querySelector("#boxes");

console.log(controls);

const START_SIZE = 30;
const SIZE_STEP = 10;
let currentSize = START_SIZE;

const createBoxes = (amount) => {
  destroyBoxes();
  const boxElementsList = [];
  for (let count = 1; count <= amount; count++) {
    const randomColor = getRandomHexColor();
    const boxElement = document.createElement("div");
    boxElement.style = `width: ${currentSize}px; height: ${currentSize}px; background-color: ${randomColor}`;
    boxElementsList.push(boxElement);
    currentSize += SIZE_STEP;
  }
  boxesContainer.append(...boxElementsList);
  input.value = "";
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
  currentSize = START_SIZE;
};

createButton.addEventListener("click", () => {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
  }
});
destroyButton.addEventListener("click", destroyBoxes);
