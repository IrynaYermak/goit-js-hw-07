// const categori = document.querySelector("#categories");
const categoriItems = document.querySelectorAll("li.item");
// const categoriTitle = document.querySelectorAll("h2");

function countCategories(elem) {
  let count = 0;
  elem.forEach(() => count++);
  return `Number of categories: ${count}`;
}

console.log(countCategories(categoriItems));
// console.log(`Number of categories: ${categoriItems.length}`);

categoriItems.forEach((elem) => {
  const categorieName = elem.querySelector("h2").textContent;
  const categorieCount = elem.querySelector("ul").children.length;

  console.log(`Category: ${categorieName}`);
  console.log(`Elements: ${categorieCount}`);
});
