const input = document.getElementById("name-input");
const span = document.getElementById("name-output");
input.addEventListener("input", () => {
  span.innerHTML = !input.value ? "anonymous" : input.value;
});
