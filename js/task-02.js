const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const LiElement = document.createElement("li");
console.log(LiElement);
const ul = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ul.insertAdjacentElement("afterbegin", li);
}
console.log(ul);
