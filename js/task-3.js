"use strict";

const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

const onInputListener = (event) => {
  const normalizedName = event.currentTarget.value.trim();
  const outputText = normalizedName || "Anonymous";
  outputElement.textContent = outputText;
};

inputElement.addEventListener("input", onInputListener);
