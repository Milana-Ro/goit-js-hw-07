"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const bodyElement = document.querySelector("body");
const spanElement = document.querySelector(".color");

const handleClick = () => {
  const randomColor = getRandomHexColor();
  spanElement.innerHTML = randomColor;
  bodyElement.style = `background-color: ${randomColor}`;
};

button.addEventListener("click", handleClick);
