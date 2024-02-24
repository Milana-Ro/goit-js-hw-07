"use strict";

const categoriesElement = document.getElementById("categories");
const categoriesCount = categoriesElement.childElementCount;

console.log("Number of categories: ", categoriesCount);

const categoriesList = Array.from(categoriesElement.children);
categoriesList.forEach((category) => {
  const categoryName = category.firstElementChild.innerText;
  const categoryElementsCount = category.lastElementChild.childElementCount;

  console.log("Category: ", categoryName);
  console.log("Elements: ", categoryElementsCount);
});
