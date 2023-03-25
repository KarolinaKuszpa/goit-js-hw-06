const number = document.querySelectorAll("li.item");
console.log(`Number of categories: ${number.length}`);

number.forEach((element) => {
  const categoryName = element.querySelector("h2");
  const categoryElement = element.querySelectorAll("li");
  console.log(`Category: ${categoryName.innerHTML}`);
  console.log(`Elements: ${categoryElement.length}`);
});
