"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector("#controls");
const [input, createButton, destroyButton] = controls.children;
const boxes = document.querySelector("#boxes");

const startSize = 30;
let currentSize = startSize;

const createBoxes = (amount) => {
  destroyBoxes();
  const elementsArray = [];
  for (let count = 1; count <= amount; count++) {
    const sizeStep = 10;
    const randomColor = getRandomHexColor();
    const boxElement = document.createElement("div");
    boxElement.style = `width: ${currentSize}px; height: ${currentSize}px; background-color: ${randomColor}`;
    elementsArray.push(boxElement);
    currentSize += sizeStep;
  }
  boxes.append(...elementsArray);
  input.value = "";
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
  currentSize = startSize;
};

createButton.addEventListener("click", () => {
  if (input.value >= 1 && input.value <= 100) {
    createBoxes(input.value);
  }
});
destroyButton.addEventListener("click", () => destroyBoxes());
